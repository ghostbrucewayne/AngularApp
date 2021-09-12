import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'AngularProject';
  flag=0;
  childMessage = 'I am passed to CHild Component';
  v2;
  constructor(private router: Router, private Route: ActivatedRoute){
  let v1= localStorage.getItem('id');
   console.log("seesion"+ v1);
   this.v2=v1?.toString();
  //  if(this.flag==0)
  //  {
  //   window.location.reload();
  //   this.flag=1;
  //  }
  }
  //let v1= localStorage.getItem('id');
  public logout(){
    
    localStorage.removeItem("id");
    this.router.navigate(['/login']);

  }
 
  contact(){
    this.router.navigate(['/contactus']);
  }
  // displayCounter(count: any) {
  //   console.log(count);
  // }
}

