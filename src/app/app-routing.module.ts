import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeubleComponent } from './meubleSociete/meuble/meuble.component';
import { ColorComponent } from './color/color.component';
import { DetailComponent } from './meubleSociete/detail/detail.component';
import { AddMeubleComponent } from './meubleSociete/add-meuble/add-meuble.component';
import { ErrorMeubleComponent } from './meubleSociete/error-meuble/error-meuble.component';
import { LoginComponent } from './login/login.component';
import { UpdateMeubleComponent } from './meubleSociete/update-meuble/update-meuble.component';


const routes: Routes = [
  {path: 'meuble', children: [
    {path: '', component: MeubleComponent},
    {path: 'updateMeuble/:id', component: UpdateMeubleComponent},
    {path: 'add', component: AddMeubleComponent},
    {path: ':id', component: DetailComponent},
  ]},
  {path: '', component: MeubleComponent},
  {path: 'login', component: LoginComponent},
  {path: 'color/:default', component: ColorComponent},
  {path: '**', component: ErrorMeubleComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
