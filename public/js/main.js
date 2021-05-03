//Exo
//les 3 choses ont plus ou moins nom,contenu et ingredients en commun donc il faut les mettre ds la classe

//Lieux
class Lieux {
    constructor(nom,contenu,ingredients){
        this.nom = nom,
        this.contenu = contenu,
        this.ingredients = ingredients
    }
}
//maison, Epicerie et cuisine reprennent les parametres (et propriétés) de Lieux en leur assigant des valeur.
let maison = new Lieux ("Chez moi",[]);
//console.log(maison);
let epicerie = new Lieux ("Epicerie",[],[]);
//console.log(epicerie);
let cuisine = new Lieux ("Cuisine",[],[])
//console.log(cuisine);

//Ingrédients
class Ingredients {
    constructor(nom,etat,prix){
        //activer les paramètres
        this.nom = nom,
        this.etat = etat,
        this.prix = prix
    }
}
let poivron = new Ingredients ("Poivron","entier",1);
//console.log(poivron);
let oignon = new Ingredients ("oignon","entier",2);
//console.log(oignon);
let oeuf = new Ingredients ("oeuf","entier",4);
//console.log(oeuf);

let epice = new Ingredients ("epice","moulu",3.25);
let paprika = new Ingredients ("paprika","moulu",1.5);
let fromage = new Ingredients ("fromage","coupé",1.6);
//console.log(epice,paprika,fromage);

//Personne
class Personne {
    constructor(nom,lieu,argent,panier){
        this.nom = nom,
        this.lieu = lieu,
        this.argent = argent,
        this.panier = panier,
        this.se_deplacer = (x) =>{
            return x
        },
        this.payer = (x) =>{
            return x
        },
        this.couper = (x,y) => {
            return console.log("x"); 
        }
    }
}

let personnage = new Personne ("Maxime","Néant",100,[])
personnage.se_deplacer()
personnage.payer()
personnage.couper()
console.log(personnage);
