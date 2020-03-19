import { Injectable } from '@angular/core';
import { Meub } from '../Model/Meub';

@Injectable({
  providedIn: 'root'
})
export class AcheterService {
  private  meubles: Meub[];

  constructor() {
    this.meubles = [];
  }
  getAcheter() : Meub [] {
     return this.meubles;
  }
  acheter(meub: Meub) : void {
    if (meub.disponible > 0){
      this.meubles.push(meub);
      meub.disponible--
    } else {
      alert("Le meuble selectionné n'est plus disponible en stocke");
    }

  }
  ritirer(meub: Meub) : void {
    const nombre = meub.disponible ;
     if(meub.disponible < nombre) {
       this.meubles.splice(meub.disponible, 1);
     } else {
       alert("désoler que cela ne vous satisfait pas");
     }
  }
}
