import React from "react";
import { shallow } from "enzyme";
import Todo from "./Todo";

const isCompleted = false;

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
