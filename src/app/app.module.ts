import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameListComponent } from './name-list/name-list.component';
import { SortItemsPipe } from './sort-items.pipe';
import { ShowCountComponent } from './show-count/show-count.component';
import { TimeCountComponent } from './time-count/time-count.component';

@NgModule({
  declarations: [
    AppComponent,
    NameListComponent,
    SortItemsPipe,
    ShowCountComponent,
    TimeCountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
