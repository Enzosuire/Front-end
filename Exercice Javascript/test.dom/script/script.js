
//aller chercher un ou des éléments dans le document


console.log("exercice good");

window.addEventListener("DOMContentLoaded", () => {
  // Toujours utiliser une boucle for avec querySelectorAll
  let balisesH2 = document.querySelectorAll("h2");

  // Utilisez :nth-child au lieu de :nth-Child
  let baliseli = document.querySelector("li:nth-child(3)");

  console.log(balisesH2);
  console.log(baliseli);

  let classrow = document.querySelectorAll(".row");
  console.log(classrow);

  let titre2 = document.querySelector("#titre2");
  console.log(titre2);

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

    for (let baliseH2 of balisesH2) {
        baliseH2.addEventListener("click", changecouleur)
        };


        baliseli.addEventListener("click", changecouleur);
        baliseli.addEventListener("mouseenter",ajoutbordures);
        baliseli.addEventListener("mouseleave",retraitbordures);

  }
  
);

//création function 

function changecouleur(){
    this.style.color="yellow";
}

function ajoutbordures (){
    this.style.border =" 2px  solid black";
    this.removeEventlistener("mouseenter",ajoutbordures);
}

function retraitbordures (){
    this.style.border =" none";
}