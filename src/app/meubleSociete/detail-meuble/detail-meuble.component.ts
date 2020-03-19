import { Component, OnInit, Input } from '@angular/core';
import { Meub } from 'src/app/Model/Meub';
import { AcheterService } from '../acheter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-meuble',
  templateUrl: './detail-meuble.component.html',
  styleUrls: ['./detail-meuble.component.scss']
})
export class DetailMeubleComponent implements OnInit {
 @Input() meub: Meub;
  constructor(
    private acheterservice : AcheterService,
    private route: Router
    ) {}

  ngOnInit() {
  }
acheter(){
  this.acheterservice.acheter(this.meub);
}
plusInfo(){
  const link = ['meuble', this.meub.id];
  this.route.navigate(link);
}
}
