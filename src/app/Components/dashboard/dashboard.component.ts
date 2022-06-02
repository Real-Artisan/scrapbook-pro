import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { UserinfoService } from 'src/app/Services/userinfo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
userInfo:any;
storage:any;
  constructor( private info: UserinfoService, private router: Router, private app: AppComponent ) {  }

  ngOnInit(): void {
    if(!this.info.isAuthenticated())
    {
      this.router.navigate(["/login"]);
    }
    this.storage = sessionStorage.getItem("userInfo");
    this.userInfo = JSON.parse(this.storage);
    
    
  }
  add()
  {
    this.app.closeAddTab();
  }
}
