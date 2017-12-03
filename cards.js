let contentsField = document.getElementById("wordInput");
let createButton = document.getElementById("create");
let textEntrySection = document.getElementById("allEntries");
let allCards = document.getElementsByClassName("newCard");
let newCard;
let deleteBtn;
let cardCollection = [];
let buttonCollection = [];

createButton.addEventListener("click", createNewCardElement);

function createNewCardElement () {
    console.log("listening");
    newCard = document.createElement("div");
    textEntrySection.appendChild(newCard);   
    newCard.setAttribute("class", "newCards");
    newCard.setAttribute("id", "newEntry" + cardCollection.length);
    
    let contents = document.createTextNode(contentsField.value);
    console.log(contents);
    newCard.appendChild(contents);
    cardCollection.push(newCard);

    deleteBtn = document.createElement("button");
    let deleteTxt = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteTxt);
    newCard.appendChild(deleteBtn);
    deleteBtn.setAttribute("class", "newEntry" + buttonCollection.length);
    buttonCollection.push(deleteBtn);
    
    deleteBtn.addEventListener("click", deleteContents);
    
}


function deleteContents (event) {
    let currentDiv = event.currentTarget.className;
    let cardToRemove = document.getElementById(currentDiv);
    textEntrySection.removeChild(cardToRemove);
}