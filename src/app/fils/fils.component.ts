import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.scss']
})
export class FilsComponent implements OnInit {
@Input() filsProprety;
@Output() sendRequest = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('fiks component: voice le contenu de la varriable de mon pere', this.filsProprety);
  }
sendEvent(){
  this.sendRequest.emit (
    `jkjhjkhj jkhujhfj iuh`  )
}
}
