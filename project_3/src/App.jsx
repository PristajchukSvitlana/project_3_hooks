import React from "react";
import { useState } from "react";

const data = [
  { id: 1, text: "Купить хлеб", done: false },
  { id: 2, text: "Сделать уроки", done: true },
  { id: 3, text: "Выучить React", done: false },
];

const App = () => {
  const [todos, setTodos] = useState(data);
  const changeTodos = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          if (todo.done === true) {
            return { ...todo, done: false };
          } else {
            return {
              ...todo,
              done: true,
            };
          }
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <h1>Список задач</h1>
      <ul>
        {todos &&
          todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => changeTodos(todo.id)}
              />
              <span>{todo.text}</span>
              <button
                onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
              >
                Remove
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
