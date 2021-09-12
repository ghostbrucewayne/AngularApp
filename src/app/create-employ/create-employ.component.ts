import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employ } from '../employ/employ';
import { EmployService } from '../service/employ.service';

@Component({
  selector: 'app-create-employ',
  templateUrl: './create-employ.component.html',
  styleUrls: ['./create-employ.component.css']
})
export class CreateEmployComponent implements OnInit {
  id: number =0;
  employ: Employ = new Employ();
  
    constructor(private employService: EmployService, private route: ActivatedRoute, private router: Router) { 

      console.log("create.....");
    }

    ngOnInit(): void {
       console.log("creating.....");
    }
  
  onSubmit(){
    console.log("submit creating.....");
    this.employService.createEmploy(this.employ).subscribe(data => {
      this.goToEmployList();
    }, error => console.log(error));
  }
  
  goToEmployList(){
    this.router.navigate(['/employs']);
  }
}
