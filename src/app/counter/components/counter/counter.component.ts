import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  startPauseList = [];
  pauseList = [];
  constructor(private cs:CounterService) { }
  ngOnInit() {
  }
  addtoPauseList(msg:string){
    if(msg === ''){
      this.pauseList =[];
      this.startPauseList = [];
    } else {
      this.pauseList.push(msg);
    }
  }
  addtoStartPauseList(msg:string){
    this.startPauseList.push(msg);
  }

}
