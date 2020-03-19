import { Injectable } from '@angular/core';
import { Meub} from '../Model/Meub';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeubleService {
link = 'http://localhost:3000/api/meubles';
 private meubles: Meub[];

  constructor(private http: HttpClient) {
    this.meubles = [
      new Meub(1, 'moha-Meuble', 'watt', 5, '30000Fr', '01.jpg', 'un lit de deux places fait avec des bois de marque', '08-81-54-53', 'Cocody'),
      new Meub(2, 'Abou-Meuble', 'kone', 15, '300000Fr', '02.jpg', 'un Etagiare avec des trioire bon pour le salon, fait avec des bois de marque', '05-50-78-96' , 'yopougon'),
      new Meub(3, 'C-Meuble', 'test', 15, '40000Fr', 'meb.jpg' , 'Abidjan'),
    ];
   }
    getMeubles(): Observable<Meub[]> {
      return this.http.get<Meub[]>(this.link);
    }
    addMeuble(meub : Meub): Observable<any> {
      //const token    = localStorage.getItem('token');
     // if (token){
     //   const params = new HttpParams().set('access_token', token);
      //  return this.http.post(this.link, meub, {params});
     // }632
      return this.http.post(this.link, meub);
     }
    getFakeMeubles() {
      return this.meubles;
    }
    getMeubleById(id: number): Observable<Meub> {
     return this.http.get<Meub>(this.link + `/${id}`);
    }

    deleteMeuble(id: number) {
      return this.http.delete(this.link + `/${id}`);
    }
    updateMeuble(meub: Meub) {
      console.log(meub);
      return this.http.put(this.link, meub);
    }

    findByName(fabriquant): Observable<Meub[]> {
      const filter = `{"where":{"fabriquant":{"like":"%${fabriquant}%"}}}`;
      const params = new HttpParams().set('filter', filter);
      return this.http.get<Meub[]>(this.link, {params});
    }
}
