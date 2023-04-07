import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercise3",
  templateUrl: "./exercise3.component.html",
  styles: [
    `
      .colorText {
        color: white;
      }
    `,
  ],
})
export class Exercise3Component implements OnInit {
  showDetail: boolean = false;
  numberClick: number = 0;
  arrayClick: number[] = [];

  constructor() {}

  ngOnInit() {}

  onDisplayDetails() {
    this.showDetail = !this.showDetail;
    this.numberClick += 1;
    this.arrayClick.push(this.numberClick);
  }

  getColor(click: number) {
    return click >= 5 && "blue";
  }
}
