console.log ("ca marche ");
let premiertableau = document.createElement("table");
premiertableau.setAttribute("id","table");
document.body.appendChild(premiertableau);
let montableau= document.querySelector("table");
const divContainer = document.createElement("div");


   for (let ligne= 1; ligne<=8 ; ligne++) {
      console.log ("ligne");

      let unecase = document.createElement("tr");
      unecase.setAttribute( "id","case" + ligne);
      montableau.appendChild(unecase);
      let maligne= document.querySelector("tr#case"+ ligne );
   
      
   


      for (let colonne = 1; colonne<=8 ; colonne++) {
         console.log ("colonne");

         let unecolonne = document.createElement("td");
         unecolonne.setAttribute( "class","colonne" + colonne);
         maligne.appendChild(unecolonne);

      if ((ligne % 2 == 1 && colonne % 2 == 0) || (ligne % 2 == 0 && colonne % 2 == 1)) {
            unecolonne.classList.add("casenoire");
        }

        unecase.append(unecolonne);


   }
   premiertableau.append(unecase);
}

premiertableau.addEventListener("click", function (eventdetail) {
   console.log("Event Detail : ", eventdetail);
   let elementClique = eventdetail.target;
    if (elementClique.classList.contains("casenoire")) {
      console.log("Case noire cliquée");
      elementClique.classList.toggle("casenoire");

   } else {
       console.log("Case blanche cliquée");
       elementClique.classList.toggle("casenoire");
    }
   })


  // elementClique.classList.toggle("casenoire");




