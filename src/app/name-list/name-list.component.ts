import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})
export class NameListComponent implements OnInit {
  data:any;
  selected ='';
  sortArr:any;
  originalData:any;
   selectedName:string;
   selectedIndex:number=1;
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
