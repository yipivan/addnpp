import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  nums: number[] = [0, 0, 0, 0];
  interval: any;
  tickTime: number = 5000;


  constructor() { }

  ngOnInit() {
  }

  start() {
    if (!this.interval) {
      this.run();
    }
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
    this.nums = [0,0,0,0];
  }

  program(time) {
    this.start();
    setTimeout(this.stop(), time);
  }

  onchange(e) {
    this.tickTime = e.target.value;
  }

  private run() {
    this.ranNum();
    this.interval = setInterval(() => {
      this.ranNum();
    }, this.tickTime)
  }

  private ranNum() {
    this.nums = this.nums.map(num => {
      return Math.floor(Math.random() * 10)
    })
  }
}
