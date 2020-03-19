import { Component, OnInit } from '@angular/core';
import { Meub } from 'src/app/Model/Meub';
import { ActivatedRoute, Router } from '@angular/router';
import { MeubleService } from '../meuble.service';

@Component({
  selector: 'app-update-meuble',
  templateUrl: './update-meuble.component.html',
  styleUrls: ['./update-meuble.component.scss']
})
export class UpdateMeubleComponent implements OnInit {
meub: Meub = null;
  constructor(
    private activateRoute: ActivatedRoute,
    private meubleservice: MeubleService,
    private route: Router
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params) => {
      this.meubleservice.getMeubleById(params.id).subscribe(
        (meub)=>{
          this.meub = meub;
        }
      );
      }
    );
  }
  updateMeuble(){
    this.meubleservice.updateMeuble(this.meub).subscribe(
      (reponse) => {
        const link = ['meuble'];
        this.route.navigate(link);
      }
    )
  }

}
