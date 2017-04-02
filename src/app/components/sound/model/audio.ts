export class Audio {
  audioContext : any;
  mediaRecorder : any;
  audioURL : any;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
