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
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("Render based on size", () => {
    it("Small Button", () => {
      const wrapper = shallow(<Button size="small"/>);
      expect(wrapper.find('.btn-sm').length).toEqual(1);
    });

    it("Medium Button", () => {
      const wrapper = shallow(<Button size="medium"/>);
      expect(wrapper.find('.btn-md').length).toEqual(1);
    });

    it("Large Button", () => {
      const wrapper = shallow(<Button size="large"/>);
      expect(wrapper.find('.btn-lg').length).toEqual(1);
    });
  });

  describe("Button disabled based on props", () => {
    it("Button should have disabled attribute", () => {
      const wrapper = shallow(<Button disabled={true}/>);
      expect(wrapper.find('button').prop('disabled')).toBeTruthy();
    });

    it("Button should not have disabled attribute", () => {
      const wrapper = shallow(<Button disabled={false}/>);
      expect(wrapper.find('button').prop('disabled')).toBeFalsy();
    });

    it("Button should be disabled class", () => {
      const wrapper = shallow(<Button disabled={true}/>);
      expect(wrapper.find('.disabled').length).toEqual(1);
    });

    it("Button should be disabled class", () => {
      const wrapper = shallow(<Button disabled={true}/>);
      expect(wrapper.find('.disabled').length).toEqual(0);
    });
  });
});
