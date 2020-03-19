export class Meub {
  id: number;
  fabriquant: string;
  responsable: string;
  disponible: number;
  prix: string;
  path: string;
  description : string;
  telephone:string;
  lieu: string;

  constructor(id = 0,
    fabriquant ='',
    responsable ='',
    disponible = 0,
    prix = '',
    path = '',
    description = '',
    telephone = '',
    lieu=''
     ){
      this.id = id;
      this.fabriquant = fabriquant;
      this.responsable = responsable;
      this.disponible = disponible;
      this.prix = prix;
      this.path = path;
      this.description = description;
      this.telephone = telephone;
      this.lieu = lieu;
  }
}


