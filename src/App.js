import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import PropTypes from "prop-types";

import "./App.css";

// Main Component
function App() {
  // used destructuring
  // todos = state, setTodos = them used method to update the state
  // inital data will be an array of objects
  const [todos, setTodos] = useState([
    {
      text: "Buy Cheese",
      isCompleted: false,
    },
    {
      text: "Go for a walk",
      isCompleted: false,
    },
    {
      text: "Learn React",
      isCompleted: false,
    },
    {
      text: "Get a dog",
      isCompleted: false,
    },
    {
      text: "Go on a holiday",
      isCompleted: false,
    },
    {
      text: "Eat more fruits",
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
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
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
            text={todo.text}
            isCompleted={todo.isCompleted}
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

App.propTypes = {
  text: PropTypes.number,
};

export default App;
