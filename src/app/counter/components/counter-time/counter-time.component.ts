import { Component, OnInit ,EventEmitter, Input, Output } from '@angular/core';
import { interval, Subscription, BehaviorSubject } from 'rxjs';
import { CounterService } from '../../services/counter.service';
@Component({
  selector: 'app-counter-time',
  templateUrl: './counter-time.component.html',
  styleUrls: ['./counter-time.component.scss']
})
export class CounterTimeComponent implements OnInit {
@Output() paused = new EventEmitter<string>();
@Output() startPause = new EventEmitter<string>();
counter :number =0;
toggle =false;
counterReset =true;
noPause:number;
observable = interval(1000);
observer:Subscription;

  constructor(private cs:CounterService) { }
  ngOnInit() {
  }
  startCounter(value:string){
    this.toggle =!this.toggle;
    if(this.counterReset){
      this.counter = parseInt(value);
    }
    this.cs.counter = this.counter;
    if(this.toggle){
      this.startPause.emit(`Started at ${new Date()} `);
      this.observer = this.observable.subscribe(x=> {
          this.counter--;
          this.cs.counter = this.counter;
          if(this.counter === 0){
            this.observer.unsubscribe();
          }
      });
    } else {
      this.observer.unsubscribe();
      if(!this.counterReset){
        this.paused.emit(`Paused at ${this.counter} `);
        this.startPause.emit(`Paused at ${new Date()}`);
      }
    }
    this.counterReset = false;
  }
  resetCounter() {
    this.observer.unsubscribe();
    this.counter = 0;
    this.cs.counter = this.counter;
    this.toggle = false;
    this.counterReset =true;
    this.paused.emit('');
  }

  ngOnDestroy(){
    if(this.observer){
    this.observer.unsubscribe();

    }
  }

}
