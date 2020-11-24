import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import FilterGroup from "./FilterGroup";

describe("FilterGroup component", () => {
  it("renders without error", () => {
    const wrapper = shallow(<FilterGroup />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
