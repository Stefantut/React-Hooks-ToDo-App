import React, { useState } from "react";
import { shallow } from "enzyme";
import App from "./App";
import Todo from "./Todo";

describe("Test for <App /> component", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("has only one title", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1.title")).toHaveLength(1);
  });

  it("has a div with class todo-list", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div.todo-list")).toHaveLength(1);
  });

  it("There is at least 1 todo task inside list", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Todo).length).toBeGreaterThan(1);
  });
});
