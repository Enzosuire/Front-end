console.log ("exercie good");


window.addEventListener("DOMContentLoaded ",() => {

let baliseH2 =document.querySelectorAll("h2");


let baliseli =document.querySelector("li:nth-Child(3)");


console.log (baliseH2);

console.log (baliseli);


let classrow =document.querySelectorAll(".row");

console.log (classrow);

let titre2 =document.querySelector("#titre2");

console.log(titre2) ;


for (let row of classrow) {
    console.log(row);
    row.style.color = ("red");

}

})


//aller chercher un ou des éléments dans le document


