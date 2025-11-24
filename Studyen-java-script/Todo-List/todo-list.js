

let todoList = [];

function TodoListInput() {
    const inputTodo = document.querySelector('.js-todo-name');
    let todoListItem = inputTodo.value;
    todoList.push(todoListItem);
    console.log(todoList);
    inputTodo.value = '';
}

let todoList2 = [];
let index = 0;

function TodoList2Input() {
    const nameInput = document.querySelector('.js-todo2-name');
    let name = nameInput.value;
    
    const dateInput = document.querySelector('.js-todo2-date');
    const date = dateInput.value;
    todoList2.push({
        name,
        date
    });
    TodoList2Show();
    // console.log(todoList2);
    nameInput.value = '';
}



function TodoList2Show() {
    let todoListHtml = '';
    for (let i = 0; i < todoList2.length; i++) {
        const todo = todoList2[i];
        const { name, date } = todo;
        const html = `
        <div class = "todo-grid">
            <p class= "todo-text">${name}</p>
            <p class= "todo-text">${date}</p>
            <button class = "js-delete-element delete-button" onclick="
              TodoListDeleteElement(${i});
            ">
              Delete
            </button> 
        </div>
         `;
        todoListHtml += html;
    }
    
    document.querySelector('.js-todo-list-show')
        .innerHTML = `${todoListHtml}`;
}

function TodoListDeleteElement(index) {
    todoList2.splice(index, 1);
    TodoList2Show();
}

