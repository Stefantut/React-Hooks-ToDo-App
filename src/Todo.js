import React from "react";

function Todo({ todo, index, completeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      {/* CompleteTodo passed as prop 
     Event Listener onClick - arrow function to call completeTodo
     which will take in the index to know exactly which one is completed */}
      <button onClick={() => completeTodo(index)}>✓</button>
    </div>
  );
}
export default Todo;
