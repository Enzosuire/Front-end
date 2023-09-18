
// Boucle pour créer 9 tables (de table1 à table9)
for (let index = 1; index <= 9; index++) {
    console.log("itération");
 
    // Création d'un élément div pour chaque table
    let uneTable = document.createElement("div");
    uneTable.setAttribute("id", "table" + index);
    document.body.appendChild(uneTable);
 
    // Sélection de la table créée par son ID
    let madIV = document.querySelector("div#table" + index);
 
    // Boucle  pour créer 10 lignes dans chaque table
    for (let ligne = 1; ligne <= 10; ligne++) {
       console.log("ligne");
       
       // Affichage de l'ID de la table actuelle
       console.log("div : " + madIV.getAttribute("id"));
 
       // Création d'un élément paragraphe pour chaque ligne
       let maligne = document.createElement("p");
       madIV.appendChild(maligne);
 
       // Calcul de la multiplication et affichage dans le paragraphe
       maligne.innerText = index + "x" + ligne + "=" + index * ligne;
    }
 }

