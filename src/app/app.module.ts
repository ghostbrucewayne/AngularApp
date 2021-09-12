import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HlightDirective } from './directives/hlight.directive';
import { ArrangeorderPipe } from './pipes/arrangeorder.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { DisplayComponent } from './display/display.component';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { CreateEmployComponent } from './create-employ/create-employ.component';
import { EmploysComponent } from './employs/employs.component';
import { EmployDetailsComponent } from './employ-details/employ-details.component';
import { UpdateEmployComponent } from './update-employ/update-employ.component';
import { AuthguardServiceService } from './service/authguard-service.service';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    RegisterComponent,
    HlightDirective,
    ArrangeorderPipe,
    SortPipe,
    FilterPipe,
    DisplayComponent,
    CreateEmployComponent,
    EmploysComponent,
    EmployDetailsComponent,
    UpdateEmployComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    HttpClientModule,
    BackButtonDisableModule.forRoot({preserveScrollPosition:true})
  ],
  providers: [AuthguardServiceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
