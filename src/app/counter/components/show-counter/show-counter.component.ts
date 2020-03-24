import { Component, OnInit } from '@angular/core';
import { interval, Subscription, BehaviorSubject } from 'rxjs';
import { CounterService } from '../../services/counter.service';
@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.scss']
})
export class ShowCounterComponent implements OnInit {

  countSubscription:Subscription;
  count:number;
  constructor(private cs:CounterService) { }

  ngOnInit() {
    this.countSubscription = this.cs.timer$.subscribe((count)=>{
      this.count =count;
    });
  }

}
