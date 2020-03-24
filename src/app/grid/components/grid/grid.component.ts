import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  data:any;
  selected ='';
  classes:any;
  sortArr:any;
  originalData:any;
   selectedName:string;
   selectedIndex:number=0;
  constructor() { }
  header:String[];

  ngOnInit() {

this.data= [

  {
  
    name:"Nagendra",
  
    class: 3,
  
    section: 'D',
  
    sub1: 87,
  
    sub2:65,
  
    sub3:71
  
    },
  
    {
  
    name:"Nagendra1",
  
    class: 3,
  
    section: 'E',
  
    sub1: 87,
  
    sub2:65,
  
    sub3:71
  
    },
  
    {
  
    name:"Nagendra2",
  
    class: 3,
  
    section: 'D',
  
    sub1: 81,
  
    sub2:75,
  
    sub3:69
  
    },
  
    {
  
    name:"Nagendra3",
  
    class: 3,
  
    section: 'F',
  
    sub1: 71,
  
    sub2:75,
  
    sub3:81
  
    }
  
  ] 
  this.header =Object.keys(this.data[0]);
  this.originalData = [...this.data];
  this.classes = {
    'fa-arrow-up':this.selectedIndex%3 == 1,
    'fa-arrow-down':this.selectedIndex%3 == 2,
    'fa-arrows-alt-h':this.selectedIndex%3 == 0
  }
  
}


//name and index
sortList(h:string){
  if(this.selectedName === h){
    this.selectedIndex ++;
  } else {
    this.selectedIndex = 1;
  }
  this.selectedName = h;
}

}
