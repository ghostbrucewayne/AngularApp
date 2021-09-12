import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { registermodel } from '../registermodel/registermodel';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reg: registermodel=new registermodel();
  constructor(private registerservice: RegisterService, private route: ActivatedRoute, private router: Router) {
    console.log("reg cons");
   }

  ngOnInit(): void {
    console.log("registering...")
  }

  onSubmit(){
    console.log("submitting register...")
    this.registerservice.createRegister(this.reg).subscribe(data =>{
      this.goToLogin();
    }, error => console.log(error));
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }
}
