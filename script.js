let addItemButton = document.getElementById('add-button');
let userInput = document.getElementById('list-input');
let groceryList = document.getElementById('grocery-list');
let errorMessage = document.getElementById('error-message');


addItemButton.onclick = function() {
    let itemContain = document.createElement('div');
    let item = document.createElement('p');
    let buttonDiv = document.createElement('div');
    let deleteButton = document.createElement('button');
    let checkButton = document.createElement('button');

    if (userInput.value === "") {
        userInput.style.outline = '2px solid red';
        addItemButton.style.borderLeft = '3px solid red'
        window.alert("Please enter item into the input.")
    } else {
        itemContain.classList.add('item-container');
        deleteButton.classList.add('delete-button');
        checkButton.classList.add('check-button');
        item.innerText = userInput.value;
        checkButton.innerText = '-'
        deleteButton.innerText = 'X';
        groceryList.appendChild(itemContain);
        itemContain.appendChild(item);
        itemContain.appendChild(buttonDiv);
        buttonDiv.appendChild(checkButton);
        buttonDiv.appendChild(deleteButton);
        userInput.value = "";
            
        deleteButton.onclick = function() {
            groceryList.removeChild(itemContain);
        }
            
        checkButton.onclick = function() {
            item.classList.toggle('line');
        }
        
        userInput.style.outline = '';
        addItemButton.style.borderLeft = ''
    }
}
