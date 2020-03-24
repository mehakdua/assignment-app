import { Component, OnInit } from '@angular/core';
import { interval, Subscription, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

counter = 0;
toggle = false;
counterReset =true;
pauseList = [];
startPauseList = [];
observable = interval(1000);
observer:Subscription;
  constructor() { }
  ngOnInit() {
  }
  startCounter(value:string){
    this.toggle =!this.toggle;
    if(this.counterReset){
      this.counter = parseInt(value);
    }
    if(this.toggle){
      this.startPauseList.push(`Started at ${new Date()} `)
      this.observer = this.observable.subscribe(x=> {
          this.counter--;
          if(this.counter === 0){
            this.observer.unsubscribe();
          }
      });
    } else {
      this.observer.unsubscribe();
      if(!this.counterReset){
        this.pauseList.push(`Paused at ${this.counter} `);
        this.startPauseList.push(`Paused at ${new Date()} `)
      }
    }
    this.counterReset = false;
  }
  resetCounter() {
    this.observer.unsubscribe();
    this.counter = 0;
    this.pauseList = [];
    this.startPauseList = [];
    this.toggle = false;
    this.counterReset =true;
  }
  ngOnDestroy(){
    if(this.observer){
    this.observer.unsubscribe();
    }
  }

}
