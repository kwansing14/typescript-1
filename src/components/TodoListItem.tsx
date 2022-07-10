import React from 'react';

interface Todo {
  text: string;
  complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  // toggleTodo: (selectedTodo: Todo) => void // this could work too
}

export const TodoListItem: React.FC<Props> = (props) => {
  const { todo } = props;
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input type='checkbox' checked={todo.complete} /> {todo.text}
      </label>
    </li>
  );
};
