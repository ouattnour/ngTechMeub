import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {
  color = 'blue';
  bgColor = 'black';
  siz = '35px';

  constructor() { }

  ngOnInit() {
  }
  changeSize(size) {
this.siz = size + 'px';
  }
}
