import { Component, OnInit } from '@angular/core';
import { Meub } from 'src/app/Model/Meub';
import { AcheterService } from '../acheter.service';

@Component({
  selector: 'app-acheter',
  templateUrl: './acheter.component.html',
  styleUrls: ['./acheter.component.scss']
})
export class AcheterComponent implements OnInit {
 meubs : Meub [];
  constructor(private acheterservice : AcheterService ) { }

  ngOnInit() {
    this.meubs = this.acheterservice.getAcheter();
  }

}
