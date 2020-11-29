import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ResultsList from "./ResultsList";

describe("ResultsList component", () => {
  it("renders without error", () => {
    const wrapper = shallow(<ResultsList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
