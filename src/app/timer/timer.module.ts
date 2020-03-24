import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route,RouterModule} from '@angular/router';
import { TimerComponent } from './components/timer/timer.component';
const routes:Route[]=[
  {
      path:'timer',
      component:TimerComponent}
    ]
@NgModule({
  declarations: [TimerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TimerModule { }
