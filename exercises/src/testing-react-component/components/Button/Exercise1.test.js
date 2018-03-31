import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Button from ".";

// Exasice #1
describe("Rendering", () => {
  // A sample test.
  it("Should render a button", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it("Should render defaults", () => {
    // Write test here for default button
    // ...
  });

  describe("Render based on size", () => {
    it("Small Button", () => {
      // Write test here for 'small' button.
      // ...
    });

    it("Medium Button", () => {
      // Write test here for 'medium' button.
      // ...
    });

    it("Large Button", () => {
      // Write test here for 'large' button.
      // ...
    });
  });

  describe("Button disabled based on props", () => {
    it("Button should have disabled attribute", () => {
      const wrapper = shallow(<Button disabled={true}/>);
      // Expect a button with disabled props
      // ...
    });

    it("Button should not have disabled attribute", () => {
      const wrapper = shallow(<Button disabled={false}/>);
      // Expect a button without disabled props
      // ...
    });

    it("Button should be disabled class", () => {
      const wrapper = shallow(<Button disabled={true}/>);
      // Expect a button with disabled class
      // ...
    });

    it("Button should be disabled class", () => {
      const wrapper = shallow(<Button disabled={false}/>);
      // Expect a button without disabled class
      // ...
    });
  });
});
