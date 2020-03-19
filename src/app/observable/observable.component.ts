import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  currentImage:string;
  monImages = [
    '01.jpg',
    '02.jpg',
    'meb.jpeg'
  ];
  monObservable: Observable<string>;
  constructor() { }

  ngOnInit() {
    this.monObservable = new Observable(
      (observer) => {
        let i = this.monImages.length - 1;
        setInterval(
          () => {
            observer.next(this.monImages[i]);
            if (i > 0) {
              i--;
            } else{
              i = this.monImages.length - 1;
            }
          },1500
        );
      }
    );
    this.monObservable.subscribe(
      (resul) => {
        console.log(resul);
        this.currentImage = resul;
      }
    );
  }

}
