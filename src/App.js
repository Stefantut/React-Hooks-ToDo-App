import React, { useState } from "react";

// Main Component
function App() {
  // used destructuring
  // todos = state, setTodos = them used method to update the state
  // inital data will be an array of objects
  const [todo, setTodos] = useState([
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
}

export default App;
