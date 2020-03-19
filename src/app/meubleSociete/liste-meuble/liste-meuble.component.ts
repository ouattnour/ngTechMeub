import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meub } from 'src/app/Model/Meub';

@Component({
  selector: 'app-liste-meuble',
  templateUrl: './liste-meuble.component.html',
  styleUrls: ['./liste-meuble.component.scss']
})
export class ListeMeubleComponent implements OnInit {
  @Input() meubs: Meub [];
  @Output() selectMeuble = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  selctMeuble(selctMeuble){
    this.selectMeuble.emit (
      selctMeuble
    );
  }
}
