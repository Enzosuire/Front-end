console.log("script chargé");

// fetch('https://jsonplaceholder.typicode.com/posts')

//       .then(response => response.json())
//       .then(json => console.log(json))

// function callApi(){
//       const url = "data.json"
//      fetch(url)
//      .then(response => response.json())
//      .then(data => console.log(data))

// }


function callApi(){
      const url = "data.json"
     fetch(url)
     .then(response => response.json())
     .then(data => {
     
     document.querySelector("#result").innerHTML = data.prenom
     })
}


