console.log("script chargé");

const UNELettre = document.createElement("div");
document.body.appendChild(UNELettre);


const UNEsectionbutton = document.createElement("section");
UNEsectionbutton.classList = "sectionbutton";
UNELettre.appendChild(UNEsectionbutton);


const UNEsectionspan = document.createElement("section");
UNEsectionspan.classList = "sectionspan";
UNELettre.appendChild(UNEsectionspan);

const UNEsectionmot = document.createElement("section");
UNEsectionmot.classList = "sectionmot";
UNELettre.appendChild(UNEsectionmot);


let compteur = 0;


const UNELettrearray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log(UNELettre);

const MOTtrouve = "LAC";
let lettresMystere = MOTtrouve.split("");
console.log("Lettres du mot mystere : ", lettresMystere);

for (let i = 0; i < UNELettrearray.length; i++) {
  console.log("button");

  let malettrebutton = document.createElement("button");
  malettrebutton.innerText = UNELettrearray[i];
  UNEsectionbutton.appendChild(malettrebutton);
  malettrebutton.classList.add("casecache");
}
for (let index = 0; index < lettresMystere.length; index++) {
  let monmot = document.createElement("span");
  monmot.textContent = "-";
  monmot.classList.add("span-lettre");
  UNEsectionmot.appendChild(monmot);
}

function afficherLettre(lettre) {
  UNEsectionmot.innerText += lettre;
}

let essaisRestants = 8;
let lesTirets = document.querySelectorAll(".span-lettre");
let essaisRestantsText = document.createElement("p");
essaisRestantsText.textContent = "Essais restants : " + essaisRestants;
document.body.appendChild(essaisRestantsText);
let perduMessage = document.createElement("p");
document.body.appendChild(perduMessage);



console.log("les tirets : ", lesTirets);

document.querySelectorAll(".casecache").forEach(bouton => {
  bouton.addEventListener("click", (detailEvenement) => {
    console.log("L'utilisateur a cliqué sur la lettre : ", detailEvenement.target.innerText);
    detailEvenement.target.disabled = true;
    let motTrouve = false;

    for (let index = 0; index < lettresMystere.length; index++) {
      if (detailEvenement.target.innerText === lettresMystere[index]) {
        console.log("La lettre " + detailEvenement.target.innerText + " est bien présente dans le mot mystère");
        motTrouve = true;
        lesTirets[index].textContent = lettresMystere[index];
        compteur++;
        if (compteur === lettresMystere) {
          console.log("Mot trouvé !");
        }
      }
    }

    if (!motTrouve) {
      console.log("La lettre " + detailEvenement.target.innerText + " n'est pas dans le mot mystère");
      essaisRestants--;
      console.log("Essais restants : " + essaisRestants);
      essaisRestantsText.textContent = "Essais restants : " + essaisRestants;



      if (essaisRestants === 0) {
        console.log("Perdu !");
        let perduMessage = document.createElement("p");
        perduMessage.textContent = "Désolé, vous avez perdu ! Le mot mystère était " + MOTtrouve + "'.";
        document.body.appendChild(perduMessage);



      }
    }
  });
})


