console.log("script charge"); 



//Variable Modifiable 
let myname = "enzo";

console.log("name:",myname);

myname = "didier";


console.log("name:",myname);

//Variable pas modifiable 

const origin = "francais";

console.log("je suis" ,origin );

//origin = "suisse";

//Les types de données
//string = "Enzo"
//Boléen = true /false ->0 / 1 -> Oui / Non 
//Number = 0 1 2 3 100 100000
//BigInt = 1000000000000000000 (les bigInt n'ont pas de limite alors que les number si )
//Symbol = new Symbol("a")
//Null = "il n'y a rien"
//Undefined = non définie

//1/ String

const myString = "abc"
const myString2= 'abc'
const myString3 = `abc`

const mySentence = "Larbre est joli"

console.log(myString,myString2, myString3,mySentence
)

// concaténer des variables

const myName ="julien"

const helloSentence = `hello ${myName}`

console.log (helloSentence);



const myName2 ="jeremy"

const helloSentence1 = `hello ${myName}`

const firstChar = helloSentence1[2]

console.log( firstChar);
console.log ("longueur", helloSentence1.length)

//commande pour les majuscules
console.log (helloSentence1.toUpperCase())

// console.log (helloSentence);
