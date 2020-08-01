import React from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      {/* CompleteTodo passed as prop 
     Event Listener onClick - arrow function to call completeTodo
     which will take in the index to know exactly which one is completed */}
      <div className="buttons-wrap">
        <button className="remove-button" onClick={() => completeTodo(index)}>
          {todo.isCompleted ? "⚊" : "✓"}
        </button>
        <button onClick={() => removeTodo(index)}>✘</button>
      </div>
    </div>
  );
}
export default Todo;
