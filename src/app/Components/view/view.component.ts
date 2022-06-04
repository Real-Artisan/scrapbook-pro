import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { NotesService } from 'src/app/Services/notes.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
result:any;
currentNote:any;
submitted:boolean = false;
stick:string = '';
pick:string = '';
constructor(private app: AppComponent,private note: NotesService, private router: Router) { }
goBack()
{
  this.router.navigate(['/dashboard']);
}
updateNote()
{
  this.app.closeUpdateTab();
  
}



deleteNote(id:number)
{

}

ngOnInit(): void {


  this.note.showCurrentNote(JSON.parse(localStorage.getItem("noteId")!)).subscribe((result) => 
    {
      this.result = result;
      this.currentNote = this.result.data;
      console.log(this.currentNote)
      
    },
    (error) => 
    {
      console.log(error);
    })
  }

}
