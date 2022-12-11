import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ipsenh-frontend';
  showHttp1: boolean = false;
  showHttp10: boolean = false;
  showHttp2: boolean = false;

  constructor() {
  }

  getImagesWithHttp10() {
    this.showHttp10 = !this.showHttp10;
  }

  getImagesWithHttp1() {
    this.showHttp1 = !this.showHttp1;
  }

  getImagesWithHttp2(): void {
    this.showHttp2 = !this.showHttp2;
  }

  getImagesWithHttp3(): void {

  }

}
