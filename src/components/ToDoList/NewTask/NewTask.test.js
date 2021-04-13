import React from "react";
import { shallow } from "enzyme";
import NewTask from "./NewTask";

describe("NewTask", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewTask />);
    expect(wrapper).toMatchSnapshot();
  });
});
