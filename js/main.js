"use strict";

// groceries array
const groceriesList = ["eggs", "flour", "sugar", "salt", "potatoes", "lemons", "tomatoes", "rice", "salmon", "milk", "pasta", "wine", "beer", "bacon", "apples"];

// richiamo l'ID "list" dell'ul
const listContainer = document.getElementById("list");

// dichiaro il punto di partenza
let i = 0;

// ciclo while 
while (i < groceriesList.length){ // condizione del ciclo while: continua finchè non arrivi alla lunghezza dell'array  
    const itemList = document.createElement("li"); //creo i li
    itemList.innerHTML=groceriesList[i]; //inserisco l'alimento all'interno di ogni li
    listContainer.append(itemList); // inserisco gli elemnti nell'html
    i++; //incremento i di 1 
}



// for (let i = 0; i < groceriesList.length; i++){
    
   
//     const itemList = document.createElement("li");


//     itemList.innerHTML=groceriesList[i];

  
//     listContainer.append(itemList);    
// }
