import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() greetMessage! :string;
  @Output() valueChange = new EventEmitter();
  counter =0;
  valueChanged(){
    this.counter=this.counter+1;
    this.valueChange.emit(this.counter);
  }

  showMessage=true;
  data=[
  {course: "Java"},
  {course: "SQL"},
  {course: "HTML"}
  ];

  constructor() { }
  name="Rounak";
  btnHeight=100;
  btnWidth=100;
  ngOnInit(): void {
  }
  addProduct(){
    console.log("hello");
  }
}
