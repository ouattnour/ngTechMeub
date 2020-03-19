import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

    tableau = [
      'bleu',
      'lightblue',
      'coral',
      'pink',
      'green',
      'lightyellow',
      'lightgreen',
      'gold',
      'gray',
      'lightgray'
    ];
    @HostBinding('style.border-color') bc;
    @HostBinding('style.color') color;
  constructor() { }
    @HostListener('keypress') changeColor(){
      const index = Math.floor( Math.random() * (this.tableau.length - 1));
      this.bc = this.tableau[index];
      this.color = this.tableau[index];
    }
}
