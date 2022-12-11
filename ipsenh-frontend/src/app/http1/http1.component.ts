import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http1',
  templateUrl: './http1.component.html',
  styleUrls: ['./http1.component.css']
})
export class Http1Component implements OnInit {

  totalPictures: number[] = [];
  slicedArray: number[][] = [[]];

  rows: number[] = [];
  columns: number[] = [];

  constructor() {
    this.totalPictures = new Array<number>();

    for(let i = 0; i < 192; i++) {
      this.totalPictures.push(i);
    }

    this.rows = new Array(12);
    this.columns = new Array(16);

    this.slicedArray = this.sliceArray(this.totalPictures, 16);
  }

  sliceArray(inputArray: number[], perChunk: number){
    const result = inputArray.reduce((resultArray: any[], item, index) => {
      const chunkIndex = Math.floor(index/perChunk)

      if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] // start a new chunk
      }

      resultArray[chunkIndex].push(item)

      return resultArray
    }, []);

    return result;
  }

  ngOnInit(): void {
  }

}
