
//aller chercher un ou des éléments dans le document


console.log("exercice good");

// window.addEventListener("DOMContentLoaded", () => {
  // Toujours utiliser une boucle for avec querySelectorAll
  let balisesH2 = document.querySelectorAll("h2");
  console.log(balisesH2);

  // Utilisez :nth-child au lieu de :nth-Child
  let baliseli = document.querySelector("li:nth-child(3)");
  console.log(baliseli.parentElement.previousElementSibling);

  // let baliseli = document.querySelector("li:first-child");
  // console.log(baliseli);

  let classrow = document.querySelectorAll(".row");
  console.log(classrow);

  // let titre2 = document.querySelector("#titre2");
  // console.log(titre2);

  let balisep =document.querySelector("#titre2 + p");
  //pas de console log le changement s'affiche pas dans la console
  balisep.previousElementSibling.innerText = "texte modifié";


  //trouver la derniére balise li et parentElement tu retrouve le UL qui emglobe le li
  
  // let baliseli = document.querySelector("li:last-child");
  // console.log(baliseli.parentElement)

  for (let row of classrow) {
    console.log(row);
    row.style.color = "red";
  }

  // Écoutez l'événement de clic sur les éléments h2

//   for (let baliseH2 of balisesH2) {
//     baliseH2.addEventListener("click", () => {
//       baliseH2.style.color = "green";
//     });

// Ca propre fonction pour obtenir le meme résulat

    // for (let baliseH2 of balisesH2) {
    //     baliseH2.addEventListener("click", function (){
    //         console.log(this);
    //       this.style.color = "green";
    //     });


//Déclaration d'une fonction pour pouvoir la réutiliser dans plusieurs cas

//     for (let baliseH2 of balisesH2) {
//         baliseH2.addEventListener("click", changecouleur)
//         };


//         baliseli.addEventListener("click", changecouleur);
//         baliseli.addEventListener("mouseenter",ajoutbordures);
//         baliseli.addEventListener("mouseleave",retraitbordures);

//   }
  
// );

//création function 

//opérateur this sera determiné par la fonction apellée 

function changecouleur(){
    this.style.color="yellow";
}

function ajoutbordures (){
    this.style.border =" 2px  solid black";
    this.removeEventlistener("mouseenter",ajoutbordures);
}

function retraitbordures (){
    this.style.border ="none";
}




// Manipulez les dates


//déclarer la date d'aujourdhui


let maDate = new Date();


console.log (maDate);


//déclarer une autre date date défini

//entre paranthése c'est le paramétre de la date du debut en 1970 il ya deux maniére de l'écricre

// let autreDate = new Date(2020,0,11,15,25,10);

let autreDate = new Date("2020-01-12 14:25:48");

// console.log (autreDate.getDate()); getDay() et getMonth() getTime() getHours()


//afficher l'élément date dans une balise html avec un id
// document.getElementById("date").textContent= autreDate;


// changer les parametres d'une date 

// autreDate.setFullYear(2021);
// autreDate.setMonth(7);
// autreDate.setDate(1);

console.log (autreDate);





// Temps entre deux dates

let temps = maDate - autreDate ;

console.log(temps);

// Dans un jour il y 24 h * 60mn * 60s * 1000 = 86400000 ms

let jour = Math.floor(temps / 86400000);

//reste temps - (jours * durée)

let reste = temps - jour * 86400000;

// Heures : 60 mn * 60s * 1000 = 3600000ms

let Heures = Math.floor(reste/3600000);

console.log (Heures);


//Opérateur Ternaire ?:

let nombre = -5;
let texte;
// if (nombre >=0){
//   texte= ("Le nombre est positif ou nul");
// }else{
//   texte= ("Le nombre est négatif");
// }

texte = (nombre >=0) ? "Le nombre est positif ou nul" : "Le nombre est négatif";

console.log(texte);


let baliseH2 = document.querySelector("#titre1");

//Sans utiliser l'opérateur ternaire

// baliseH2.addEventListener("click",function(){
//   if(this.innerText === "Sous-titre"){
// this.innerText = "Sous-titre cliqué";
// this.style.color="yellow";
//   }else{
//     this.innerText = "Sous-titre";

// }
// });

//En utilisant l'opérateur ternaire

baliseH2.addEventListener("click",function(){
 this.innerText =(this.innerText === "Sous-titre")
 ? "Sous-titre cliqué" : "Sous-titre";
});


let baliseinput = document.querySelector("#myText");

baliseinput.addEventListener("keypress", () =>{

  console.log(baliseinput.value);


})
