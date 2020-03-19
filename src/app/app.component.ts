import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 bgColor = 'red';
 show = false;
  private readonly newProperty = this;

 changeStatus() {
   this.show = !this.show;


 }

}
