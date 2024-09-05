document.addEventListener("DOMContentLoaded", () => {
    getTodos();
});



async function getTodos() {
    response = await fetch('/getlist');
    data = await response.json();
    const todoListUL = document.getElementById('todo-list')
    todoListUL.innerHTML = '';
    data.forEach(todo => {
        if (todo.status === 'closed' || todo.name === '') {
            return;
        }
        const todoNewLI = document.createElement('li');
        todoNewLI.className = 'flex items-center justify-between bg-white/50 backdrop-blur-md rounded-lg p-3';

        const todoSpan = document.createElement('span');
        todoSpan.className = 'font-heidan';
        todoSpan.textContent = todo.name;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-100';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', async () => {
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

        todoNewLI.appendChild(todoSpan);
        todoNewLI.appendChild(deleteButton);
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