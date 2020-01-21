import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'
import {Router} from "@angular/router"
import {TOASTR_TOKEN,Toastr} from 'src/app/common/toastr.service';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup;
  constructor(private authService:AuthService, private router:Router, @Inject(TOASTR_TOKEN) private toastr:Toastr) { }

  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
    let lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required])
    this.profileForm= new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }
  validateFirstname(){
    return this.profileForm.controls.firstName.valid && this.profileForm.controls.firstName.untouched
  }
  validateLastname(){
    return this.profileForm.controls.lastName.valid && this.profileForm.controls.lastName.untouched
  }
  cancel(){
    this.router.navigate(['events'])
  }
  saveProfile(formValues){
    if(this.profileForm.valid){
      this.authService.updateCurrentUser(formValues.firstName,formValues.lastName)
      .subscribe(()=>{
        this.toastr.success('Profile Saved')
      });
    }
  }

  logout(){
  
    this.authService.logout().subscribe(()=>{
    this.router.navigate(['/user/login']);
    })
  }
}
