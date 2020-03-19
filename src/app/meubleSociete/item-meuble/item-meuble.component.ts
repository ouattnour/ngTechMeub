import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meub } from 'src/app/Model/Meub';


@Component({
  selector: 'app-item-meuble',
  templateUrl: './item-meuble.component.html',
  styleUrls: ['./item-meuble.component.scss']
})
export class ItemMeubleComponent implements OnInit {
@Input() meub: Meub;
@Output() selectMeuble = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
selectMeubl() {
  //emmetre un evenement et y injecter la persone
  this.selectMeuble.emit(
    this.meub
  );
}
}
