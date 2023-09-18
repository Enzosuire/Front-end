console.log("Script chargé !");
let monAnniv = new Date(1971, 6, 19);
let prochainAnniv = new Date(2024,6,19);
let today = new Date ();
console.log("date : ", monAnniv);
console.log(monAnniv.getTime());
console.log("Prochain anniversaire",prochainAnniv);
console.log(prochainAnniv.getTime());
console.log("date du jour:",today);
console.log(today.getTime());

let calcul = prochainAnniv.getTime() -today.getTime()
console.log (calcul);

let difference  = Math.floor ((((calcul/1000)/60)/60)/24)
console.log("le prochain anniv est dans ",difference ,"jours");

