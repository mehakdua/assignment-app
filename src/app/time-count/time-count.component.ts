import { Component, OnInit } from '@angular/core';
import { interval, Subscription, BehaviorSubject } from 'rxjs';
import { TimerService } from '../timer.service';
@Component({
  selector: 'app-time-count',
  templateUrl: './time-count.component.html',
  styleUrls: ['./time-count.component.css']
})
export class TimeCountComponent implements OnInit {
counter :number =0;
 x :any;
toggle =false;
 myvar =true;
 noPause:number;
 no:number;
 pauseList:string[]=[];
 startPauseList:string[]=[];
 
observable = interval(1000);
obs:Subscription;
  constructor(private ts:TimerService) { }
  ngOnInit() {
  }
  startCounter(value:string){
    
    this.toggle =!this.toggle;
    if(this.myvar){
      this.counter = parseInt(value);
    }
    this.ts.counter = this.counter;
    if(this.toggle){
      this.startPauseList.push(`started  at ${new Date()} `)
      this.obs = this.observable.subscribe(x=> {
          this.counter--;
          this.ts.counter = this.counter;
          
      });
    } else {
      this.obs.unsubscribe();
      if(!this.myvar){
        this.pauseList.push(`paused at${this.counter} `);
        this.startPauseList.push(`paused  at ${new Date()} `)
      }
    }
    
    this.myvar =false;

  }



}
