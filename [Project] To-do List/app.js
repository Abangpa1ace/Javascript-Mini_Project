// Selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const todoFilter = document.querySelector('.todo-filter');

// Event Listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
todoFilter.addEventListener('click', filterTodo);

// Functions

// func : add Todo
function addTodo(event) {
    //Prevent from submitting
    event.preventDefault();
    //Create todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create li
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);
    //Create chkBtn
    const chkBtn = document.createElement('button');
    chkBtn.classList.add('check-btn');
    chkBtn.innerHTML = '<i class="fas fa-check"></i>';  
    todoDiv.appendChild(chkBtn);
    //Create delBtn
    const delBtn = document.createElement('button');
    delBtn.classList.add('delete-btn');
    delBtn.innerHTML = '<i class="fas fa-trash"></i>';  
    todoDiv.appendChild(delBtn);

    //Append to List
    todoList.appendChild(todoDiv);
    todoInput.value = "";   //초기화
};

// func : delete & check Todo
function deleteCheck(e) {
    const target = e.target; 
    const targetParent = target.parentElement;
    console.log(target);
    if (target.classList[0]==='delete-btn') {   //DELETE
        targetParent.classList.add("fall");
        targetParent.addEventListener('transitionend', function() {
            targetParent.remove();
        })
    } 
    else if (target.classList[0]==='check-btn') {   //CHECK
        targetParent.classList.toggle('completed');
    } 
}

// func : filtering Todo
function filterTodo(e) {
    const todos = todoList.childNodes;      //list로 저장
    todos.forEach((todo) => {
        switch(e.target.value) {
            case "all":
                todo.style.display='flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'none';
                } else {
                    todo.style.display = 'flex';
                }
                break;
        }
    })
}

// func : Save!
function saveLocalTodos(todo) {
    //CHECK -- Already Have?
    let savdeTodos;
    if(localStorage.getItem('savedTodos') === null) {
        savdeTodos = [];
    } else {
        savdeTodos = JSON.parse(localStorage.getItem('savedTodos'));
    }
}