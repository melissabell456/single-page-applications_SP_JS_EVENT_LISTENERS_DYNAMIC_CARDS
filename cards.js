// -Create an HTML page that contains a text area and a button labeled Create.
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

// Target Appropriate elements
let contentsField = document.getElementById("wordInput");
let createButton = document.getElementById("create");
let textEntrySection = document.getElementById("allEntries");
let newCard;
let deleteBtn;
// let allCards;
let allCards = document.getElementsByClassName("newCard");
let cardCollection = [];
let buttonCollection = [];

createButton.addEventListener("click", createNewCardElement);

function createNewCardElement () {
    console.log("listening");
    newCard = document.createElement("div");
    textEntrySection.appendChild(newCard);   
    newCard.setAttribute("class", "newEntry" + cardCollection.length);
    // newCard.setAttribute("class", "new");
    
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
    // return newCard;
}

function deleteContents (event) {
    console.log("about to delete shit");
    // identify current div to target and delete
    let currentDiv = document.getElementsByClassName(deleteBtn.className);
    console.log(currentDiv);
    // let cardToDelete = currentBtn.parentNode
    // console.log(cardToDelete);
    textEntrySection.removeChild(currentDiv);
}