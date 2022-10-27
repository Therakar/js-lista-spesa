"use strict";

// groceries array
const groceriesList = ["eggs", "flour", "sugar", "salt", "potatoes", "lemons", "tomatoes", "rice", "salmon", "milk", "pasta", "wine", "beer", "bacon", "apples"];

// richiamo l'ID "list" dell'ul
const listContainer = document.getElementById("list");

// ciclo for 
for (let i = 0; i < groceriesList.length; i++){
    
    // creo i li
    const itemList = document.createElement("li");

    // inserisco gli alimenti dentro i li
    itemList.innerHTML=groceriesList[i];

    // insterisco l'elemento creato nell'html
    listContainer.append(itemList);    
}
