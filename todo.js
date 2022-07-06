const form = document.querySelector('#add-list');
const input = document.querySelector('#list-item');
const todoList = document.querySelector('#list');

todoList.addEventListener('click',function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove()
    };
    if(e.target.tagName === 'INPUT'){
        e.target.parentElement.style.setProperty('text-decoration', 'line-through');
    }
});

//todoList.addEventListener('click', function(e){
    //if(e.target.tagName === 'INPUT'){
     //   e.target.parentElement.textDecoration 
    //}
//})

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newItem = document.createElement('li');
    //const checkDone = document.createElement('input');
    //checkDone.type = 'checkbox';
    const removeBtn = document.createElement('button');
    const checkDone = document.createElement('input');
    checkDone.type = 'checkbox';
    removeBtn.innerText = 'Remove';
    newItem.innerText = input.value;
    newItem.prepend(checkDone);
    newItem.appendChild(removeBtn);
    //newItem.prependChild(checkDone);
    todoList.appendChild(newItem);
    input.value = '';
});

localStorage.setItem = ('listItem', JSON.stringify);
localStorage.getItem = ('listItem', JSON.parse);
