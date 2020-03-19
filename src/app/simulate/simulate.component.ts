import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simulate',
  templateUrl: './simulate.component.html',
  styleUrls: ['./simulate.component.scss']
})
export class SimulateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  goToComponent(route){
    const link = [route];
    this.router.navigate(link);
  }
}
