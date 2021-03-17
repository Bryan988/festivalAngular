import { Component } from '@angular/core';
import { Festival } from './models/festival';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  festivals: Festival[];

  constructor() {
    this.festivals=[
      new Festival("FJM2019"),
      new Festival("FJM2020"),
      new Festival("FJM2021"),
    ]
  }

}
