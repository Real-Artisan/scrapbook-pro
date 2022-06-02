import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
submitted:boolean = false;
  constructor( private auth: AuthService, private router: Router ) { }
firstName = new FormControl("", Validators.required);
lastName = new FormControl("", Validators.required);
email = new FormControl("", Validators.required);
password = new FormControl("", Validators.required);
confirmPassword = new FormControl("", Validators.required);
  ngOnInit(): void {
  }
  register()
  {
    this.submitted = true;
    if(this.password.value !== this.confirmPassword.value)
    {
      this.submitted = false;
      return;
    }
    else
    {

      return this.auth.register(
        {
          email:this.email.value,
          first_name:this.firstName.value,
          password:this.password.value,
          last_name:this.lastName.value,
        }
      ).subscribe((response) => 
      {
        this.submitted = false;
        this.auth.login({ email:this.email.value, password:this.password.value });
        
      },
      (error) =>
      {
        this.submitted = false;
        console.log(error);
      });
    }

  }

}
