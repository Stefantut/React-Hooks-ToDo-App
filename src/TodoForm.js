import React, { useState } from "react";

// takes in 1 prop - addTodo method
function TodoForm({ addTodo }) {
  // used useState hook because the form will have State to it
  // value = the state, setValue= the method which updates the state
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // prevent the form default action
    e.preventDefault();
    // stop from submitting if is an empty value
    if (!value) return;

    // calling addTodo function which is passed as a prop
    // will take in the new typed value
    addTodo(value);

    // clear the form
    setValue("");
  };

  return (
    // form with submit handler, the value will the value from the state
    // on change will run the method to update the state - setValue
    // will send whatever is in the input
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-item-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
export default TodoForm;
