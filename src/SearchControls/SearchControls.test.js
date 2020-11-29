import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import SearchControls from "./SearchControls";

describe("SearchControls component", () => {
  it("renders without error", () => {
    const wrapper = shallow(<SearchControls />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
