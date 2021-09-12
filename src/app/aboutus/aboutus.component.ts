import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  
  local = "";
  constructor() { }
  productName = "Football";
  productPrice = 2000;
  public hdate = new Date();
public name = 'Krishna';
public person = {
fname: 'Radhe',
lname: 'Krishna'
};
public val = 5.678;

public characters=['krishna','govind','rahul','rounak'];
searchText='GOVIND';
  function1(event: any) {
    this.local = event.target.value;

  }
  ngOnInit(): void {
    
  }

}
