import { Component, OnInit } from '@angular/core';
import { Meub } from 'src/app/Model/Meub';
import { MeubleService } from '../meuble.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  chaine: string = '';
  searchReult: Meub [];
  constructor(
    private meubleServce:MeubleService,
    private route: Router
  ) { }

  ngOnInit() {
    this.searchReult = [];
  }
  search(){
    const fabriquant = this.chaine.trim();
    if (fabriquant.length) {
      this.meubleServce.findByName(fabriquant).subscribe(
        (meub) => {
          console.log(meub);
          this.searchReult = meub;
        }
      );
    } else {
      this.searchReult = [];
    }

  }

  selectMeubl(meub: Meub){
    const link = ['meuble', meub.id];
    this.route.navigate(link);
    this.searchReult = [];
    this.chaine ='';
  }
}
