import React from "react";

function Todo({ index, completeTodo, removeTodo, isCompleted, text }) {
  return (
    <div
      style={{ textDecoration: isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {text}
      {/* CompleteTodo passed as prop 
     Event Listener onClick - arrow function to call completeTodo
     which will take in the index to know exactly which one is completed */}
      <div className="buttons-wrap">
        <button onClick={() => completeTodo(index)}>
          {isCompleted ? "⚊" : "✓"}
        </button>
        <button className="removeTodo" onClick={() => removeTodo(index)}>
          ✘
        </button>
      </div>
    </div>
  );
}
export default Todo;
