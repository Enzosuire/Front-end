console.log("Script chargé !");
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
let Jour  = document.getElementById ("Jour").value;
console.log("Jour date de naissance :",Jour)
let Mois = document.getElementById ("Mois").value;
console.log("Mois date de naissance :",Mois)
let Annee = document.getElementById("Annee").value;
console.log("Annee date de naissance :",Annee)

if ( Jour < 1 || Jour >31) {
    alert("Jour non valide :", Jour);
    return
} 

if (Mois < 1 || Mois > 12) {
    alert("Mois non valide :", Mois);
    return
} 


if (Annee < 1900 || Annee >2023) {
    alert("Annee non valide :", Annee);
    return
    
} 

Mois = Mois -1;
   
const dateActuelle = new Date();

// Créez un objet de date pour la date de naissance
const dateNaissance = new Date(Annee, Mois -1, Jour);

// Créez un objet de date pour le prochain anniversaire
const prochainAnniversaire = new Date(dateActuelle.getFullYear() + 1, Mois -1 , Jour);

// Calculez la différence en jours
const differenceEnJours = Math.ceil((prochainAnniversaire - dateActuelle) / (1000 * 60 * 60 * 24));

console.log("Nombre de jours jusqu'au prochain anniversaire:", differenceEnJours);


});

  


