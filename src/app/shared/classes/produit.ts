export class Produit {

  titre:string;
photo:string;
description:string;
prix:string;
datecreation?:string;
delaifin?:string;

  constructor(
    titre: string,
    photo: string,
    description: string,
    prix: string,
    datecreation?: string,
    delaifin?: string
) {
    this.titre = titre
    this.photo = photo
    this.description = description
    this.prix = prix
    this.datecreation = datecreation
    this.delaifin = delaifin
  }


}
