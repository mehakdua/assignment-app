import { Injectable } from '@angular/core';
import { interval, BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private count = 0;
  public timer$:Subject<number> =new Subject<number>();
  constructor() { }
  
  set counter(count:number){
    this.count = count;
    this.timer$.next(this.count);
  } 
  get counter(){
    return this.count;
  }
  
}
