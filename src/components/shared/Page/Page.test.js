import React from "react";
import { shallow } from "enzyme";
import Page from "./Page";

describe("Page", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Page />);
    expect(wrapper).toMatchSnapshot();
  });
});
