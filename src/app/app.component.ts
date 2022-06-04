import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scrapbook';
  add:boolean = !true;
  update:boolean = !true;
  
  
  closeAddTab()
  {
    this.add = !this.add;
  }
  closeUpdateTab()
  {
    
    this.update = !this.update;
  }
}