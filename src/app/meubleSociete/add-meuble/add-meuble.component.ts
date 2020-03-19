import { Component, OnInit } from '@angular/core';
import { MeubleService } from '../meuble.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-meuble',
  templateUrl: './add-meuble.component.html',
  styleUrls: ['./add-meuble.component.scss']
})
export class AddMeubleComponent implements OnInit {
  errorMessage = '';
  constructor(
    private meubleservice: MeubleService,
    private route: Router
    ) { }

  ngOnInit() {

  }

  addMeub(formulaire: NgForm) {
     this.meubleservice.addMeuble(formulaire.value).subscribe(
      (reponse) => {
        const link = ['']
       this.route.navigate(link);
     },
     (error) => {
       this.errorMessage = `Probleme de connection a votre serveur`;
       console.log(error);
     }
   );

  }
}
