import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.scss']
})
export class ClasseComponent implements OnInit {
show;
teams = [
  'est',
  'barca',
  'om',
  'milan',
  'accec',

];
  constructor() { }

  ngOnInit() {
  }

}