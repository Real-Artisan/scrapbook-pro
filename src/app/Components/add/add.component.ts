import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { NotesService } from 'src/app/Services/notes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
results:any;
submitted:boolean = false;
  constructor( private notes: NotesService, private app:AppComponent ) { }
  title = new FormControl("", Validators.required);
  content = new FormControl("", Validators.required);
  closeTab()
  {
    this.app.closeAddTab();
  }
  addNewNote()
  {
    this.submitted = true;
    return this.notes.createNote({ title:this.title.value, content:this.content.value })
    .subscribe((response) => 
    {
      this.submitted = false;
      this.results = response;
      console.log(this.results);
      this.app.closeAddTab();
    },
    (error) =>
    {
      this.submitted = false;
      console.log(error);
    });
  }

  ngOnInit(): void {
  }

}
