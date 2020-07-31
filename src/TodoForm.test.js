import React, { useState } from "react";
import { shallow } from "enzyme";
import TodoForm from "./TodoForm";

describe("Test for <TodoForm /> component", () => {
  it("check if enter was pressed", () => {
    const wrapper = shallow(<TodoForm />);
    wrapper.find("input").simulate("keypress", { key: "Enter" });
  });
});
