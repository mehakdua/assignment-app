import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './components/grid/grid.component';
import {Route,RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module';
const routes:Route[]=[
  {
      path:'grid',
      component:GridComponent}]
@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class GridModule { }
