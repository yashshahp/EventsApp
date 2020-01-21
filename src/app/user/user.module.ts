import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [ProfileComponent,LoginComponent],
  exports: [ProfileComponent,LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
