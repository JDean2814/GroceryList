let addItemButton = document.getElementById('add-button');
let userInput = document.getElementById('list-input');
let groceryList = document.getElementById('grocery-list');
let errorMessage = document.getElementById('error-message');

document.addEventListener('DOMContentLoaded', loadLocalStorage);

addItemButton.onclick = function() {
    if (userInput.value === "") {
        userInput.style.outline = '2px solid red';
        addItemButton.style.borderLeft = '3px solid red'
        window.alert("Please enter item into the input.")
    } else {
        let itemContain = document.createElement('div');
        let item = document.createElement('p');
        let buttonDiv = document.createElement('div');
        let deleteButton = document.createElement('button');
        let checkButton = document.createElement('button');

        itemContain.classList.add('item-container');
        deleteButton.classList.add('delete-button');
        checkButton.classList.add('check-button');
        item.innerText = userInput.value;
        saveLocalStorage(userInput.value);
        checkButton.innerText = '-'
        deleteButton.innerText = 'X';
        groceryList.appendChild(itemContain);
        itemContain.appendChild(item);
        itemContain.appendChild(buttonDiv);
        buttonDiv.appendChild(checkButton);
        buttonDiv.appendChild(deleteButton);
        userInput.value = "";
            
        deleteButton.onclick = function() {
            const groceryItem = item.innerText;
            removeGroceryItem(groceryItem);
            groceryList.removeChild(itemContain);
        }
            
        checkButton.onclick = function() {
            item.classList.toggle('line');
        }
        
        userInput.style.outline = '';
        addItemButton.style.borderLeft = ''
    }
}

function saveLocalStorage(item) {
    let groceryItems;
    if(localStorage.getItem('groceryItems') === null) {
        groceryItems = [];
    } else {
        groceryItems = JSON.parse(localStorage.getItem('groceryItems'));
    }
    groceryItems.push(item);
    localStorage.setItem('groceryItems', JSON.stringify(groceryItems))
}

function loadLocalStorage() {
    let groceryItems;
    if(localStorage.getItem('groceryItems') === null) {
        groceryItems = [];
    } else {
        groceryItems = JSON.parse(localStorage.getItem('groceryItems'));
    }
    groceryItems.forEach(function(groceryItem) { 
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

        deleteButton.onclick = function() {
            const groceryItem = item.innerText;
            removeGroceryItem(groceryItem);
            groceryList.removeChild(itemContain);
        }
            
        checkButton.onclick = function() {
            item.classList.toggle('line');
        }
    });
}

function removeGroceryItem(groceryItem) {
    let groceryItems;
    if(localStorage.getItem('groceryItems') === null) {
        groceryItems = [];
    } else {
        groceryItems = JSON.parse(localStorage.getItem('groceryItems'));
    }
    const index = groceryItems.indexOf(groceryItem.toLowerCase(), 0);
    groceryItems.splice(index, 1);
    localStorage.setItem("groceryItems", JSON.stringify(groceryItems));
}
