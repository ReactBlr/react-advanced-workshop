import React from "react";
import { shallow } from "enzyme";
import Button from ".";

// Exasice #2
describe("Interaction", () => {
  it("Callback props onClick", () => {
    const spyFunc = jest.fn()
    const component = shallow(<Button onClick={spyFunc}/>);
    component.find('button').simulate('click')
    expect(spyFunc).toHaveBeenCalled();
  })
});
