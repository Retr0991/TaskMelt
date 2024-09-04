document.addEventListener("DOMContentLoaded", () => {
    getTodos();
});



async function getTodos() {
    response = await fetch('/getlist');
    data = await response.json();
    const todoListUL = document.getElementById('todo-list')
    todoListUL.innerHTML = '';
    data.forEach(todo => {
        const todoNewLI = document.createElement('li');
        todoNewLI.textContent = todo.name;
        if (todo.status === 'closed') {
            todoNewLI.style.textDecoration = 'line-through';
        }
        todoNewLI.addEventListener('click', async () => {
            response = await fetch(`/gettask/${todo.id}`)
            data = await response.json();
            data.status = 'closed';
            
            response = await fetch(`/updatetask/${todo.id}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            getTodos();
        });
        todoListUL.appendChild(todoNewLI);
    })
}

async function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const newTodo = {
        id: 69,
        priority: 1,
        due: String(Date.now()),
        status: 'open',
        name: String(todoInput.value),
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
    
    // add the new todo to the list
    getTodos();
}