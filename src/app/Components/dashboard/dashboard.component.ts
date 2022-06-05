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
multiNotes:any;
  constructor(private note: NotesService, private info: UserinfoService, private router: Router, private app: AppComponent ) {  }

  ngOnInit(): void {
    this.note.getMyNotes().subscribe((response) => 
    {
      this.result = response;
      if(this.result.data.length > 1){
        this.multiNotes = this.result.data
      }else{
        this.singleNote = this.result.data['0'] 

      }
      
      
    },
    (error) => 
    {
      console.log(error)
    })
    
    
  }
  logout()
  {
    sessionStorage.removeItem('loggedIn');
    this.router.navigate(['login']);
  }
  add()
  {
    this.app.closeAddTab();
  }

  viewNote(id:number)
  {
    
    localStorage.setItem("noteId", JSON.stringify(id));
    this.router.navigate(['/view']);
  }

}
