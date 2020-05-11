import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./App.css";

// Main Component
function App() {
  // used destructuring
  // todos = state, setTodos = them used method to update the state
  // inital data will be an array of objects
  const [todos, setTodos] = useState([
    {
      text: "Lorem ipsum 1",
      isCompleted: false,
    },
    {
      text: "Lorem ipsum 2",
      isCompleted: false,
    },
    {
      text: "Lorem ipsum 3",
      isCompleted: false,
    },
    {
      text: "Lorem ipsum 4",
      isCompleted: false,
    },
  ]);

  // Add a new todo
  const addTodo = (text) => {
    // used spread operator to copy everything from todos array
    const newTodos = [...todos, { text }];
    // update de state - passed new array
    setTodos(newTodos);
  };

  // Mark as completed
  const completeTodo = (index) => {
    //an array with current todos - use spread op
    const newTodos = [...todos];
    //mark as completed
    newTodos[index].isCompleted = true;
    // set state
    setTodos(newTodos);
  };

  // Delete todo
  const removeTodo = (index) => {
    //gets the todos
    const newTodos = [...todos];
    // removes the todo
    newTodos.splice(index, 1);
    // updated the state
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1 className="title">ToDo List:</h1>
      <div className="todo-list">
        {/* Map throught todos from State  */}
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}

        {/* Display input Component  */}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
