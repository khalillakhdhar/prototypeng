import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { ListprodComponent } from './components/pages/listprod/listprod.component';
import { PanierComponent } from './components/pages/panier/panier.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';

import { initFirebaseBackend } from './shared/services/auth-utils';
import { environment } from 'src/environments/environment';
initFirebaseBackend(environment.firebaseConfig);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductsComponent,
    ListprodComponent,
    PanierComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
