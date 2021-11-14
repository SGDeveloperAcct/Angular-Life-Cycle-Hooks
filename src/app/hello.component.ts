import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit, OnDestroy, OnChanges {
  @Input() name: string;

  ngOnChanges(changes) {
    console.log(changes);
  }

  ngOnInit() {
    console.log('component initialized');
  }

  ngOnDestroy() {
    console.log('component destroyed');
  }
}
