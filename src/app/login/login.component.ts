import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { registermodel } from '../registermodel/registermodel';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;
  message: string;
  sto = false;
  isFormValid = true;

  emailId: string = '';
  email: string = '';
  password: string = '';
  login: registermodel = new registermodel;
  register: registermodel[] = [];


  constructor(private router: Router, private Route: ActivatedRoute, private registerService: RegisterService) {
    this.message = '';
  }


  ngOnInit() {


    this.formGroup = new FormGroup({
      UserName: new FormControl('', [
        Validators.required,
        // Validators.pattern(/^[a-zA-Z0-9.!#$%&â€™*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ])
    });
  }

  getRegister() {
    this.registerService.getregisterList().subscribe(data => {
      this.register = data;
      this.logged();
    });

  }

  logged() {
    let flag = 0;
    for (let reg of this.register) {
      if (reg.emailId === this.email) {
        console.log("login successful");
        console.log(this.email + " email " +reg.emailId);
        console.log(this.password + " password " + reg.password);
        flag = 1;
        localStorage.setItem("id",reg.emailId);

        
      }
      else {
        continue;
      }
    }
    if (flag == 0) {
      alert("WRONG CREDENTIAL")
      console.log(this.email + " email " + this.login.emailId);
      console.log(this.password + " password " + this.login.password);
    }
    else {
       this.router.navigate(['/display']);
    }

  }
  user = '';
  onSubmit() {
    
    this.getRegister();
    console.log(this.formGroup);
    this.isFormValid = true;
    if (this.isFormValid) {
      /* const user = {
         username: this.formGroup.value('Username'), // Username input field
         password: this.formGroup.value('Password') // Password input field
       };*/
      console.log('Form valid');
      // this.user=this.formGroup.value("Username");
      localStorage.setItem('SessionUser', this.user);
      // console.log(user.username + '  ' + user.password );
      console.log('Formgroup value :' + this.formGroup.value);
      //this.router.navigate(['/display']);
    }

  }

  onReset() {
    this.formGroup.reset();
  }

}
