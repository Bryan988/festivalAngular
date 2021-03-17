import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Festival } from 'src/app/models/festival';

@Component({
  selector: 'app-festival-details',
  templateUrl: './festival-details.component.html',
  styleUrls: ['./festival-details.component.css']
})
export class FestivalDetailsComponent implements OnInit {
  @Input() festival:Festival
  nameControl: FormControl;
  constructor() { }

  ngOnInit(): void {
    this.nameControl = new FormControl(this.festival.name)
  }
  valid():void{
    this.festival.name=this.nameControl.value;
  }

}
