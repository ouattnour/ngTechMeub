import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthentificationService,
    private route: Router
  ) { }
  ngOnInit() {
  }
  login(Credentials){
    this.auth.login(Credentials).subscribe(
      (reponse: any )=>{
        const token = reponse.id;
        const link =[''];
        localStorage.setItem('token', token);
        this.route.navigate(link);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
