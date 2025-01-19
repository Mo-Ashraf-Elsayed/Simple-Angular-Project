import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  arrImgs: string[] = [
    'imgs/poert1.png',
    'imgs/port2.png',
    'imgs/port3.png',
    'imgs/poert1.png',
    'imgs/port2.png',
    'imgs/port3.png',
  ];
  imgIndex: number = 0;
  addDisplayNone: boolean = true;
  imgBinding: string = 'imgs/poert1.png';
  displayImg(i: number): void {
    this.imgIndex = i;
    this.addDisplayNone = false;
    this.imgBinding = this.arrImgs[this.imgIndex];
  }
  hideImg(): void {
    this.addDisplayNone = true;
  }
  next(): void {
    this.imgIndex++;
    if (this.imgIndex >= this.arrImgs.length) {
      this.imgIndex = this.arrImgs.length - 1;
    }
    this.displayImg(this.imgIndex);
  }
  previous(): void {
    this.imgIndex--;
    if (this.imgIndex <= 0) {
      this.imgIndex = 0;
    }
    this.displayImg(this.imgIndex);
  }
  stopPropagation(e: MouseEvent): void {
    e.stopPropagation();
    console.log(e);
  }
}
