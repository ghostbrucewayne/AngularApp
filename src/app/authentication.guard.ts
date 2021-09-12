import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from './service/authguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authguardservie: AuthguardServiceService, private router: Router){}
  canActivate(): boolean{
    if(!this.authguardservie.gettoken()){
      this.router.navigateByUrl("/login");
    }
    return this.authguardservie.gettoken();
  }
  
}
