import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Result from "./Result";

describe("Result component", () => {
  it("renders without error", () => {
    const wrapper = shallow(<Result />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
