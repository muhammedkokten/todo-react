import { RiErrorWarningLine } from "react-icons/ri"; 
import { HiOutlineCursorClick } from "react-icons/hi"; 
import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';
import './App.css'

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo, completed: false },
      ]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-between w-full max-h-screen h-[90dvh]">
      <div className='bg-white text-black gap-3 px-5 py-2 flex items-center justify-center font-semibold rounded-full'><RiErrorWarningLine /> This To Do app has been made to practice with React and Typescriopt</div>
      <div className="bg-white p-6 rounded-lg shadow-lg  max-w-2xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-black w-full">Your Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded text-black bg-white w-full mr-2"
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 bg-[#191919] text-white rounded"
          >
            Add
          </button>
        </div>
        <ul className="list-none p-0">
          {todos.map(todo => (
            <li
              key={todo.id}
              className={`flex justify-between text-black font-semibold items-center p-2 border-b border-gray-300 ${
                todo.completed ? 'line-through text-black/50' : ''
              }`}
            >
              <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
              <div className="flex items-center">
                <FiCheckCircle
                  onClick={() => toggleTodo(todo.id)}
                  className={`cursor-pointer text-xl mr-2 ${
                    todo.completed ? 'text-green-500' : 'text-gray-500'
                  }`}
                />
                <FaTrashAlt
                  onClick={() => deleteTodo(todo.id)}
                  className="cursor-pointer text-xl text-red-500"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-row justify-center items-center gap-5'>
        <div className='bg-white text-black gap-3 px-5 py-2 flex items-center justify-center line-through rounded-full'>Did it! <HiOutlineCursorClick /></div>
        <div>or</div>
        <div className='bg-white text-black gap-3 px-5 py-2 flex items-center justify-center line-through rounded-full'>Delete it! <FaTrashAlt /></div>
      </div>
      <div>All rights reserved ©2024 Muhammet Kökten</div>
    </div>
  );
};

export default App;
