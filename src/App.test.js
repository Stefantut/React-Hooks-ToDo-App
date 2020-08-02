import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Todo from "./Todo";

describe("Test for <App /> component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("has only one title", () => {
    expect(wrapper.find("h1.title")).toHaveLength(1);
  });

  it("has a div with class todo-list", () => {
    expect(wrapper.find("div.todo-list")).toHaveLength(1);
  });

  test("There is at least 1 todo task inside list", () => {
    expect(wrapper.find(Todo).length).toBeGreaterThan(1);
  });
});
