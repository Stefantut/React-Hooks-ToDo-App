import React from "react";
import { shallow } from "enzyme";
import Todo from "./Todo";

const isCompleted = false;

const todos = [
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
];

describe("<Todo>", () => {
  it("should be defined", () => {
    expect(Todo).toBeDefined();
  });

  it("should include a buttons wrap", () => {
    const wrapper = shallow(<Todo isCompleted={isCompleted} />);
    const buttonsWrap = wrapper.find("div div");
    expect(buttonsWrap.exists());
  });
});
