import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { NotesService } from 'src/app/Services/notes.service';
import { UserinfoService } from 'src/app/Services/userinfo.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
userInfo:any;
storage:any;
singleNote:any;
result:any;
time:any;
  constructor(private note: NotesService, private info: UserinfoService, private router: Router, private app: AppComponent ) {  }

  ngOnInit(): void {
    this.note.getMyNotes().subscribe((response) => 
    {
      this.result = response;
      this.singleNote = this.result.data['0'] 
      this.time = Date.parse(this.singleNote.created);
      console.log(this.time)
    },
    (error) => 
    {
      console.log(error)
    })
    if(!this.info.isAuthenticated())
    {
      this.router.navigate(["/login"]);
    }
    this.info.isAuthenticated().subscribe((result) => 
    {
      console.log(result)
    },
     (error)=>{console.log(error)})
    this.storage = sessionStorage.getItem("userInfo");
    this.userInfo = JSON.parse(this.storage);
    
    
  }
  add()
  {
    this.app.closeAddTab();
  }
}
