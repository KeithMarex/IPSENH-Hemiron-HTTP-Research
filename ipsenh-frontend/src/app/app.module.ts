import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { Http2Component } from './http2/http2.component';
import { Http1Component } from './http1/http1.component';

@NgModule({
  declarations: [
    AppComponent,
    Http2Component,
    Http1Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
