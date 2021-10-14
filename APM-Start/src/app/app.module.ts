import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule // always import this browser module
  ],
  bootstrap: [AppComponent]  // start up component
})
export class AppModule { }
