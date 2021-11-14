import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit, OnDestroy, OnChanges {
  @Input() name: string;
  setIntervalInstance;

  ngOnChanges(changes) {
    console.log(changes)
  }

  ngOnInit() {
    console.log('component initialized');
    this.setIntervalInstance = setInterval(() => {
      console.log(new Date());
    }, 1000);
  }

  ngOnDestroy() {
    console.log('component destroyed');
    clearInterval(this.setIntervalInstance);
  }
}
