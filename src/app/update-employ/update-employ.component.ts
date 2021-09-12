import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employ } from '../employ/employ';
import { EmployService } from '../service/employ.service';

@Component({
  selector: 'app-update-employ',
  templateUrl: './update-employ.component.html',
  styleUrls: ['./update-employ.component.css']
})
export class UpdateEmployComponent implements OnInit {
  id: number =0;
  employ: Employ = new Employ();
  
    constructor(private employService: EmployService, private route: ActivatedRoute, private router: Router) { 

      console.log("update.....");
    }

    ngOnInit(): void {
      console.log("update.....");
    this.id=this.route.snapshot.params['id'];
    this.employService.getEmployById(this.id).subscribe(data =>{
      this.employ = data;
      }, error => console.log(error));
    }
  
  onSubmit(){
    this.employService.updateEmploy(this.id, this.employ).subscribe(data => {
      this.goToEmployList();
    }, error => console.log(error));
  }
  
  goToEmployList(){
    this.router.navigate(['/employs']);
  }
  }