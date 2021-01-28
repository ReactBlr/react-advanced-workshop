import React from "react";
import { shallow } from "enzyme";
import Counter from ".";

// Exasice #4
describe("User interactions on counter", () => {

  it("increment the count when the increment button is clicked", () => {
    const wrapper = shallow(<Counter />);
    wrapper.find('Button.increment').simulate('click');
    expect(wrapper.find(".count").text()).toEqual("1");
  });

  it("decrement the count when the decrement button is clicked", () => {
    const wrapper = shallow(<Counter />);
    wrapper.find('Button.decrement').simulate('click');
    expect(wrapper.find(".count").text()).toEqual("-1");
  });
});
