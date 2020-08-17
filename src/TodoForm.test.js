import React, { useState } from "react";
import { shallow } from "enzyme";
import TodoForm from "./TodoForm";

describe("Test for <TodoForm /> component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TodoForm />);
  });
  it("check if enter was pressed", () => {
    wrapper.find("input").simulate("keypress", { key: "Enter" });
  });

  it("the input field is undefined on start", () => {
    const input = wrapper.find(".add-item-input");
    expect(input.value).toBe(undefined);
  });

  it("check if the value of input is a string", () => {
    const inputValue = wrapper.find("input").props().value;
    expect(typeof inputValue).toBe("string");
  });

  it("check if value is Stefan", () => {
    const inputVal = (wrapper.find("input").value = "Stefan");
    expect(inputVal).toBe("Stefan");
  });
});
