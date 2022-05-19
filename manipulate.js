// create three variables
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

// create function that runs when button is clicked
button.addEventListener('click', () =>{
    const item = input.value;
    input.value = '';

    // three new elements 
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    // append span and button 
    listItem.appendChild(listText);
    listItem.appendChild(listBtn);
    listText.textContent = item;
    listBtn.textContent = '❌';

    // append listItem as child of list
    list.appendChild(listItem);

    // event handler to delete button, so when clocked it will delete the entire list item it is inside
    listBtn.addEventListener('click', () =>{
        list.removeChild(listItem);
    });

    input.focus();
});