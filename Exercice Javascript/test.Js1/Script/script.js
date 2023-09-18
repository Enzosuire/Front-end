let monAge = 0;
let compteur = 0;
const CLE_SECRET = "dfdfdgd4564dfsdf4sd";


function construireNomComplet(nom, prenom) {
    let nomComplet = nom + " " + prenom;
    return nomComplet;
}

let inputPrenom = "Alain";
let inputNom = "ORLUK";
let nomCompletConstruit = "";
nomCompletConstruit = construireNomComplet(inputNom, inputPrenom);
console.log(nomCompletConstruit);



let buttonElt = document.getElementById("mon_bouton");
console.log(buttonElt);
buttonElt.addEventListener("click", function() {
    console.log("bouton cliqué !");
});



buttonElt.addEventListener("click", function() {
    compteur++;
//if (compteur==4) {
    //console.log("bouton cliqué !");
   // buttonElt.style.backgroundColor = "green" ;
    
//}   

switch (compteur) {
    case 1:
        buttonElt.innerText = "1 Fois";
        buttonElt.style.backgroundColor = "green";
        break;
    case 2:
        buttonElt.innerText = "2 Fois";
        buttonElt.style.backgroundColor = "red";
        buttonElt.style.animation = "medium";
        break;
    case 3:
        buttonElt.innerText = "3 Fois";
        buttonElt.style.backgroundColor = "blue";
        
        break;
    case 4:
        buttonElt.innerText = "4 Fois";
        buttonElt.style.backgroundColor = "violet";
        buttonElt.style.fontSize = "xx-large";

        let newParagraph = document.createElement("p");
        newParagraph.innerText = "Cliqué 4 fois";
         let myHeader = document.getElementById("header");
         myHeader.appendChild(newParagraph);
         myHeader.style.fontSize = "xx-large";
        break;
    

    default:
        break;
};
});


buttonElt.innerText = "ENVOYER";





