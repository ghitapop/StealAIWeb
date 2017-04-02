import { Component, OnInit } from '@angular/core';
import { Audio } from '../model/audio';
import {DomSanitizer} from "@angular/platform-browser";

var MediaStreamRecorder = require('msr');

@Component({
  selector: 'app-speech-recognizer',
  templateUrl: './speech-recognizer.component.html',
  styleUrls: ['./speech-recognizer.component.css']
})
export class SpeechRecognizerComponent implements OnInit {

  private audio : Audio = new Audio();

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.audio = new Audio();
    this.audio.audioContext = this.audioContextCheck();
  }

  audioContextCheck() {
    if(typeof AudioContext !== 'undefined') {
      return new AudioContext();
    } else {
      throw new Error('Audio context not supported!');
    }
  }

  //--- private methods ---
  private onMediaSuccess(stream) {
    let self = this;

    self.audio.mediaRecorder = new MediaStreamRecorder(stream);
    //self.audio.mediaRecorder.mimeType = 'audio/ogg';
    //self.audio.mediaRecorder.audioChannels = 1;
    self.audio.mediaRecorder.start();

    self.audio.mediaRecorder.ondataavailable = function(blob) {
      self.audio.audioURL = self.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
      console.log(self.audio.audioURL);
    }
  }
  private onMediaError(error) {
    console.log("The following error occurred: " + error);
  }

  public captureSound() {
    let constrains = {
      audio: true
    };

    if(navigator.getUserMedia) {
      navigator.getUserMedia(constrains, this.onMediaSuccess.bind(this), this.onMediaError);
    } else {
      console.log("getUserMedia not supported");
    }
  }

  public stopCaptureSound() {
    this.audio.mediaRecorder.stop();
  }








}
