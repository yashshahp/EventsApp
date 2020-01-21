import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName;
  password;
  mouseoverLogin;
  loginInvalid = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password)
      .subscribe(resp => {
        if (!resp) {
          this.loginInvalid=true;
        }
        else {
          this.router.navigate(['events']);
        }
      })

  }
  cancel() {
    this.router.navigate(['events'])

  }
}
