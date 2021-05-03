//Lieux
class Lieux {
    constructor(nom, contenu, ingredient) {
        this.nom = nom,
        this.contenu = contenu,
        this.ingredient = ingredient
    }
}
let maison = new Lieux("maison", []);
let epicerie = new Lieux("epicerie", [], []);
let cuisine = new Lieux("cuisine", [], []);

console.log(maison);

//ingredient
class Ingredients {
    constructor(nom, etat, prix) {
        this.nom = nom,
        this.etat = etat,
        this.prix = prix
    }
}

let poivron = new Ingredients("poivron", "entier", 1);
let oignon = new Ingredients("oignon", "entier", 2);
let oeuf = new Ingredients("oeuf", "entier", 4);
let epice = new Ingredients("epices", "moulu", 3.25);
let paprika = new Ingredients("paprika", "moulu", 1.5);
let fromage = new Ingredients("fromage", "coupé", 1.6);

console.log(epice);

//personne
class Personne {
    constructor(nom, lieu, argent, panier){
        this.nom = nom,
        this.lieu = lieu,
        this.argent = argent,
        this.panier = panier,
        this.se_deplacer = (x) =>{
        },
        this.payer = (x) =>{
            return console.log("bonjour");
        }
    }
    couper = (x,y) =>{
        console.log(this.nom);
    }
}

let personnage = new Personne("Moha", "BXL", 30000, []);

personnage.couper();