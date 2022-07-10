import React, { useState } from 'react';
import './App.css';
import { TodoListItem } from './components/TodoListItem';
interface Todo {
  text: string;
  complete: boolean;
}

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  console.log(todos);
  const toggleTodo = (selectedTodo: Todo) => {
    console.log('selected--', selectedTodo);
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className='App'>
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
