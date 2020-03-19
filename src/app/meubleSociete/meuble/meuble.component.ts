import { Component, OnInit } from '@angular/core';
import { Meub } from 'src/app/Model/Meub';
import { MeubleService } from '../meuble.service';

@Component({
  selector: 'app-meuble',
  templateUrl: './meuble.component.html',
  styleUrls: ['./meuble.component.scss']
})
export class MeubleComponent implements OnInit {
  meubs: Meub [];
  selectMeuble: Meub;
  constructor(private meubleServive: MeubleService) { }

  ngOnInit() {
    this.meubleServive.getMeubles().subscribe(
      (meubs) => {
        this.meubs= meubs;
      },
      (error) => {
        alert('Problème d\'accès à l\'api, les données sont fack');
        this.meubs=this.meubleServive.getFakeMeubles();
        console.log(error);
      }
    );
  }
  selectMeubl(Meub){
    this.selectMeuble = Meub;
  }
}
