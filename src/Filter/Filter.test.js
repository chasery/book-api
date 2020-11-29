import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Filter from "./Filter";

describe("Filter component", () => {
  it("renders without error", () => {
    const wrapper = shallow(<Filter />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
