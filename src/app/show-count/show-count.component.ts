import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-show-count',
  templateUrl: './show-count.component.html',
  styleUrls: ['./show-count.component.scss']
})
export class ShowCountComponent implements OnInit {
  countSubscription:Subscription;
  count:number;
  constructor(private ts:TimerService) { }

  ngOnInit() {
    this.countSubscription = this.ts.timer$.subscribe((count)=>{
      this.count =count;
    });
  }

}
