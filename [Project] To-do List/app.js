

// Selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const todoFilter = document.querySelector('.todo-filter');

// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
todoFilter.addEventListener('change', filterTodo);

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
    //Add NewTodo to LocalStorage
    saveLocalTodos(todoInput.value);
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
    if (target.classList[0]==='delete-btn') {   //DELETE
        targetParent.classList.add("fall");
        removeLocalTodos(targetParent);
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

// Storage 동작
// func : Save to LocalStorage
function saveLocalTodos(todo) {
    //CHECK -- Already Have?
    let savedTodos;
    if(localStorage.getItem('savedTodos') === null) {
        savedTodos = [];
    } else {
        savedTodos = JSON.parse(localStorage.getItem('savedTodos'));
    }
    savedTodos.push(todo);
    localStorage.setItem('savedTodos', JSON.stringify(savedTodos));
}

// func : get from LocalStorage
function getTodos() {
    let savedTodos;
    if(localStorage.getItem('savedTodos') === null) {
        savedTodos = [];
    } else {
        savedTodos = JSON.parse(localStorage.getItem('savedTodos'));
    }
    savedTodos.forEach((todo) => {
        //Create todo Div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //Create li
        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item');
        newTodo.innerText = todo;
        todoDiv.appendChild(newTodo);
        //Add NewTodo to LocalStorage
        saveLocalTodos(todo);
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
    })
}

// func : Delete from LocalStorage
function removeLocalTodos(todo) {
    let savedTodos;
    if(localStorage.getItem('savedTodos') === null) {
        savedTodos = [];
    } else {
        savedTodos = JSON.parse(localStorage.getItem('savedTodos'));
    }
    removeIndex = todo.children[0].innerText;
    savedTodos.splice(savedTodos.indexOf(removeIndex), 1);
    localStorage.setItem('savedTodos', JSON.stringify(savedTodos));
}
