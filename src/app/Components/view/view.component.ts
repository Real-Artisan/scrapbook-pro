import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(private note: NotesService) { }

  ngOnInit(): void {
    this.note.showCurrentNote(JSON.parse(localStorage.getItem("noteId")!)).subscribe()
  }

}
