import { Produit } from './produit';
import { User } from './user';
export class Panier {
  produit:Produit;
  user:User;
  quantite:number=1;

  constructor(produit: Produit, user: User, quantite: number) {
    this.produit = produit
    this.user = user
    this.quantite = quantite
  }

}
