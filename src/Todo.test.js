import React from "react";
import { shallow } from "enzyme";
import Todo from "./Todo";

const isCompleted = false;

describe("<Todo>", () => {
  it("should be defined", () => {
    expect(Todo).toBeDefined();
  });

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Todo isCompleted={isCompleted} />);
  });

  it("should include a buttons wrap", () => {
    const buttonsWrap = wrapper.find("div div");
    expect(buttonsWrap.exists());
  });

  it("has a button with ✘ as text", () => {
    const button = wrapper.find(".removeTodo");
    expect(button.text()).toEqual("✘");
  });
});
