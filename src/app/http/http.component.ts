import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(
      (reponse) => {
        console.log(reponse);
      },
      (error) => {
        console.log('error',error );
      },
      () => {
        console.log('complete :>');
      }
    )
  }

}
