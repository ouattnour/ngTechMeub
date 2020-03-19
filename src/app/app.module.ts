import {FormsModule} from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { FilsComponent } from './fils/fils.component';
import { MeubleComponent } from './meubleSociete/meuble/meuble.component';
import { ItemMeubleComponent } from './meubleSociete/item-meuble/item-meuble.component';
import { DetailMeubleComponent } from './meubleSociete/detail-meuble/detail-meuble.component';
import { ListeMeubleComponent } from './meubleSociete/liste-meuble/liste-meuble.component';
import { StyleComponent } from './directive/style/style.component';
import { ClasseComponent } from './directive/classe/classe.component';
import { HighlightDirective } from './highlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaulImagePipe } from './meubleSociete/defaul-image.pipe';
import { AcheterComponent } from './meubleSociete/acheter/acheter.component';
import { HeaderComponent } from './header/header.component';
import { SimulateComponent } from './simulate/simulate.component';
import { DetailComponent } from './meubleSociete/detail/detail.component';
import { AddMeubleComponent } from './meubleSociete/add-meuble/add-meuble.component';
import { ErrorMeubleComponent } from './meubleSociete/error-meuble/error-meuble.component';
import { LoginComponent } from './login/login.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { ObservableComponent } from './observable/observable.component';
import { LoginInterceptorProvider } from './interceptors/login.interceptors';
import { UpdateMeubleComponent } from './meubleSociete/update-meuble/update-meuble.component';
import { SearchComponent } from './meubleSociete/search/search.component';




@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    FilsComponent,
    MeubleComponent,
    ItemMeubleComponent,
    DetailMeubleComponent,
    ListeMeubleComponent,
    StyleComponent,
    ClasseComponent,
    HighlightDirective,
    RainbowDirective,
    DefaulImagePipe,
    AcheterComponent,
    HeaderComponent,
    SimulateComponent,
    DetailComponent,
    AddMeubleComponent,

    ErrorMeubleComponent,
    LoginComponent,
    HttpComponent,
    ObservableComponent,
    UpdateMeubleComponent,
    SearchComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [
    LoginInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
