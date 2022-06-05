import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UserinfoService } from 'src/app/Services/userinfo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
submitted:boolean = false;
errorMessage = ""
error:any;
  constructor( private auth: AuthService, private router: Router, private info: UserinfoService ) { }
email = new FormControl("", Validators.required);
password = new FormControl("", Validators.required);
user:any;
result:any;
userInfo:any;
login()
{
  this.submitted = true;
  return this.auth.login(
    {
      email:this.email.value,
      password:this.password.value,
    }
  ).subscribe((response) =>
  {
  this.result = response;
  sessionStorage.setItem('loggedIn', "true");
  this.router.navigate(["/dashboard"]);
  },
  (error) =>
  {
    this.submitted = false;
    this.error = error;
    this.errorMessage = this.error.error.message

  });
}

  ngOnInit(): void {
  }

}
