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
currentContent:any;
currentTitle:any;
constructor(private app: AppComponent,private note: NotesService, private router: Router) { }
goBack()
{
  this.router.navigate(['/dashboard']);
}
updateNote(id:number)
{
  this.note.updateCurrentNote(id, { title:localStorage.getItem('title')!, content:localStorage.getItem('content')!}).subscribe
  ((result) =>
  {
    window.location.reload();
  });
}



deleteNote(id:number)
{
  this.note.deleteCurrentNote(id).subscribe((result) =>
  {
    this.router.navigate(["dashboard"]);
  },
  (error) =>
  {
    console.log(error);
  });
}
changeMe(event:any)
{
  
  localStorage.setItem('title', (event as HTMLInputElement).value);
}
changeTwo(event:any)
{
  
  localStorage.setItem('content', (event as HTMLInputElement).value);
}

ngOnInit(): void {


  this.note.showCurrentNote(JSON.parse(localStorage.getItem("noteId")!)).subscribe((result) => 
    {
      this.result = result;
      this.currentNote = this.result.data;
      this.currentTitle = this.currentNote.title;
      this.currentContent = this.currentNote.content;
      
      localStorage.setItem('title', this.currentTitle);
      localStorage.setItem('content', this.currentContent);
      
    },
    (error) => 
    {
      console.log(error);
    })
  }

}
