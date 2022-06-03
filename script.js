let addItemButton = document.getElementById('add-button');
let userInput = document.getElementById('list-input');
let groceryList = document.getElementById('grocery-list');
let clearButton = document.getElementById('clear-button')

document.addEventListener('DOMContentLoaded', loadLocalStorage);

//Create a grocery list item
function createGroceryItem(groceryItem) {
    let itemContain = document.createElement('div');
    let item = document.createElement('p');
    let buttonDiv = document.createElement('div');
    let deleteButton = document.createElement('button');
    let checkButton = document.createElement('button');

    itemContain.classList.add('item-container');
    deleteButton.classList.add('delete-button');
    checkButton.classList.add('check-button');
    item.innerText = groceryItem;
    checkButton.innerText = '-'
    deleteButton.innerText = 'X';
    groceryList.appendChild(itemContain);
    itemContain.appendChild(item);
    itemContain.appendChild(buttonDiv);
    buttonDiv.appendChild(checkButton);
    buttonDiv.appendChild(deleteButton);

//Adding a delete button to the list item
    deleteButton.onclick = function() {
        const groceryItem = item.innerText.toLowerCase();
        removeGroceryItem(groceryItem);
        groceryList.removeChild(itemContain);
    }

//Adding a "check-off" buttno to the list item
    checkButton.onclick = function() {
        item.classList.toggle('line');
    }
}

//Adding enter key functionality 
userInput.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        if (userInput.value === "") {
            userInput.style.outline = '2px solid red';
            addItemButton.style.borderLeft = '3px solid red'
            window.alert("Please enter item into the input.")
        } else {
            let groceryItem = userInput.value;
            createGroceryItem(groceryItem);
    
            saveLocalStorage(userInput.value.toLowerCase());
            userInput.value = "";
            
            userInput.style.outline = '';
            addItemButton.style.borderLeft = ''
        }
    }
})

//Creating button to add item to list
addItemButton.onclick = function() {
    if (userInput.value === "") {
        userInput.style.outline = '2px solid red';
        addItemButton.style.borderLeft = '3px solid red'
        window.alert("Please enter item into the input.")
    } else {
        let groceryItem = userInput.value;
        createGroceryItem(groceryItem);

        saveLocalStorage(userInput.value.toLowerCase());
        userInput.value = "";
        
        userInput.style.outline = '';
        addItemButton.style.borderLeft = ''
    }
}

//Adding a clear button to clear the list from app as well as local storage
clearButton.onclick = function() {
    localStorage.clear();
    while (groceryList.hasChildNodes()) {
        groceryList.removeChild(groceryList.firstChild);
    }
}


//Checking to see if there are anything stored in local storage
function checkLocalStorage() {
    let arr;
    if(localStorage.getItem('groceryItemsArray') === null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('groceryItemsArray'));
    }
    return arr;   
}


//Saving items in list to local storage
function saveLocalStorage(item) {
    let groceryItemsArray = checkLocalStorage();
    groceryItemsArray.push(item);
    localStorage.setItem('groceryItemsArray', JSON.stringify(groceryItemsArray))
}

//Loading local storage into list
function loadLocalStorage() {
    let groceryItemsArray = checkLocalStorage();
    groceryItemsArray.forEach(function(groceryItem) { 
        createGroceryItem(groceryItem);
    });
}

//Removing items from local storage
function removeGroceryItem(groceryItem) {
    let groceryItemsArray = checkLocalStorage();
    const index = groceryItemsArray.indexOf(groceryItem, 0);
    groceryItemsArray.splice(index, 1);
    localStorage.setItem("groceryItemsArray", JSON.stringify(groceryItemsArray));
}
