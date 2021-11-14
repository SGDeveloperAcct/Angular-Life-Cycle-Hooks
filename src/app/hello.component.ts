import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  DoCheck,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent
  implements OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit
{
  @Input() name: string;
  setIntervalInstance;

  ngOnChanges(changes) {
    console.log(changes);
  }

  ngOnInit() {
    console.log('component initialized');
    this.setIntervalInstance = setInterval(() => {
      console.log(new Date());
    }, 1000);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('component destroyed');
    clearInterval(this.setIntervalInstance);
  }
}
