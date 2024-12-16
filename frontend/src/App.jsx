import { useState } from 'react'
import './App.css'
import { Todo } from './components/Todo'

function App() {
  const [todos, setTodos] = useState()

  const [newTodo, setNewTodo] = useState('')

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  };

  function handleAddTodo() {
    if (newTodo === '')
      return
    setTodos([...todos, newTodo])
    setNewTodo('')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center grow">
      <header className="w-full backdrop-blur-lg p-1 top-0 fixed">
        <h1 className="font-ankh text-3xl md:text-4xl text-left text-black font-medium select-none">TaskMelt</h1>
    </header>

    <main className="w-full max-w-md bg-white/30 backdrop-blur-md rounded-xl shadow-lg overflow-hidden">
      <div className='p-5'>
          <div className="flex mb-4">
            <input 
              onChange={(e) => {
                const value = e.target.value
                setNewTodo(value)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleAddTodo()
                }
              }}
              type="text" 
              placeholder="New todo"
              className="flex-grow p-2 border border-transparent bg-white/50 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
              value={newTodo}
            />
            <button 
              onClick={handleAddTodo}
              className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-100"
            >
              Add
            </button>
          </div>
        <ul className='space-y-2'>
          {todos.map((todo, index) => {
            return <Todo key={index} title={todo} index={index} deleteTodo={deleteTodo} />
          })}
        </ul>
      </div>
    </main>
    </div>
  )
}

export default App
