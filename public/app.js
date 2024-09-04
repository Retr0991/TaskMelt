document.addEventListener("DOMContentLoaded", () => {
    getTodos();
});



async function getTodos() {
    response = await fetch('/getlist');
    data = await response.json();
    const todoListUL = document.getElementById('todo-list')
    data.forEach(todo => {
        todoNewLI = document.createElement('li');
        todoNewLI.textContent = todo.name;
        todoListUL.appendChild(todoNewLI);
    })
}

async function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const newTodo = {
        ID: parseInt(Math.random().toString(36).substring(7)),
        priority: 1,
        due: Date.now(),
        status: 'open',
        name: todoInput.value,
    }

    response = await fetch('/createtodo', {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        console.error('I give up');
        return;
    }

    // data = await response.json();
    // console.log(data);
    
    todoInput.value = '';
    getTodos();
}