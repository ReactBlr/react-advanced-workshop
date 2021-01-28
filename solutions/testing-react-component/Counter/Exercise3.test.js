import React from "react";
import { shallow } from "enzyme";
import Counter from ".";

// Exasice #3
describe("Initial state of the counter", () => {

  // A Sample bad test
  it("initial state in bad way", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.state().count).toEqual(0);
  });

  it("initial state should be 0", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find(".count").text()).toEqual("0");
  });
});
