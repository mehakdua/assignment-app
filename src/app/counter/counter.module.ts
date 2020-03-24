import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route,RouterModule} from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { CounterTimeComponent } from './components/counter-time/counter-time.component';
import { ShowCounterComponent } from './components/show-counter/show-counter.component';
const routes:Route[]=[
  {
      path:'',
      component:CounterComponent}
    ]
@NgModule({
  declarations: [CounterComponent, CounterTimeComponent, ShowCounterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CounterModule { }
