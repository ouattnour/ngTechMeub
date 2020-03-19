import { Component, OnInit } from '@angular/core';
import { MeubleService } from '../meuble.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Meub } from 'src/app/Model/Meub';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  meub : Meub;
  constructor(
    private meubleservice: MeubleService,
    private activatedRoute:ActivatedRoute,
    private route: Router
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
      this.meubleservice.getMeubleById(params.id).subscribe(
        (meub)=>{
          this.meub = meub;
        }
      );
      }
    );
  }
  deleteMeuble(){
    this.meubleservice.deleteMeuble(this.meub.id).subscribe(
      (reponse) => {
         const link = ['']
        this.route.navigate(link);

      },
      (error) => {
        console.log(error);
     }
    );
  }
  update(id: number){
    const link = ['meuble/updateMeuble', id];
    this.route.navigate(link);
  }

}
