import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateEmployComponent } from './create-employ/create-employ.component';
import { EmploysComponent } from './employs/employs.component';
import { DisplayComponent } from './display/display.component';
import { UpdateEmployComponent } from './update-employ/update-employ.component';
import { EmployDetailsComponent } from './employ-details/employ-details.component';
import { AuthenticationGuard } from './authentication.guard';
import { AppComponent } from './app.component';
//canActivate:[AuthenticationGuard]
const routes: Routes = [
  { path: 'contactus', component: ContactusComponent },
  { path: 'appcomponent', component: AppComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create-employ', component: CreateEmployComponent },
  { path: 'update-employ/:id', component: UpdateEmployComponent },
  { path: 'employ-details/:id', component: EmployDetailsComponent },
  { path: 'register/:emailId', component: LoginComponent },
  { path: 'employs', component: EmploysComponent },
  //{ path: '**', component: LoginComponent },
  
  // {path:' ',redirectTo:'employs',pathMatch:'full'},
  {
    path: 'display', component: DisplayComponent,
    children: [
      { path: 'create-employ', component: CreateEmployComponent },
      { path: 'update-employ/:id', component: UpdateEmployComponent },
      { path: 'employ-details/:id', component: EmployDetailsComponent },
      { path: 'employs', component: EmploysComponent }
    ]
  },

  { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard] },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '', component: LoginComponent,
    children: [
      { path: 'register/:emailId', component: LoginComponent }
    ]
  },
  {
    path: 'register', component: RegisterComponent,
    children: [
      { path: 'register/:emailId', component: LoginComponent }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
