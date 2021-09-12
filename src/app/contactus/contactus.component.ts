import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registermodel } from '../registermodel/registermodel';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private registerservice: RegisterService, private router: Router) { }
  register: registermodel[]=[];

  getRegisterList(){
    this.registerservice.getregisterList().subscribe(data =>{
    this.register = data;
    console.log(this.register);
    });
  }

  ngOnInit(): void {
    this.getRegisterList();
  }

}
