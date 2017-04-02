import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CubeComponent } from './components/cube/cube.component';
import { FlipComponent } from './components/flip/flip.component';
import { SpeechRecognizerComponent } from './components/sound/speech-recognizer/speech-recognizer.component';
import { AiComponent } from './components/ai/ai.component';

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    FlipComponent,
    SpeechRecognizerComponent,
    AiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
