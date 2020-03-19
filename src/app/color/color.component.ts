import { Component, OnInit } from '@angular/core';
import { PremierService } from '../premier.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
  providers: [PremierService]
})
export class ColorComponent implements OnInit {
color = 'red';
  constructor(
    private premier: PremierService,
    private router: Router,
    private activeroute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.activeroute.params.subscribe(
      (params) => {
        this.color = params['default'];
      }
    );
  }
processReq(message: any) {
  alert(message);
}
loggerData(){
  this.premier.logger('test');
}
goToMeuble(){
  const link = ['meuble'];
  this.router.navigate(link)
}

}
