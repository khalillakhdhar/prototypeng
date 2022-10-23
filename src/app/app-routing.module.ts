import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ListprodComponent } from './components/pages/listprod/listprod.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { PanierComponent } from './components/pages/panier/panier.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {
    path: 'home',component:HomeComponent,
    children: [
    {
      path: '',component:ListprodComponent
    } ,
    {
      path:'admin',component:ProductsComponent
    },
    {
      path:'panier', component:PanierComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
