let addItemButton = document.getElementById('add-button');
let userInput = document.getElementById('list-input');
let groceryList = document.getElementById('grocery-list');

addItemButton.onclick = function() {
    let itemContain = document.createElement('div');
    let item = document.createElement('p');
    let deleteButton = document.createElement('button');
    itemContain.classList.add('item-container');
    item.innerText = userInput.value;
    deleteButton.innerText = 'X';
    groceryList.appendChild(itemContain);
    itemContain.appendChild(item);
    itemContain.appendChild(deleteButton);
    userInput.value = "";

    deleteButton.onclick = function() {
        groceryList.removeChild(itemContain);
    }
}
