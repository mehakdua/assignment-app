import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GridModule } from './grid/grid.module';
import {Route,RouterModule} from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { TimerModule } from './timer/timer.module';
const routes:Route[] = [
  {path: '',   redirectTo: '/grid', pathMatch: 'full' },
     {path: 'counter',loadChildren:'./counter/counter.module#CounterModule'
    }
  ]; 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    GridModule,
    TimerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
