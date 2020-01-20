import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { News } from "../index";

describe("News", () => {
  it("renders without crashing given the right props", () => {
    const props = {
      news: [{}],
      getNewsArticles: jest.fn(),
      isLoading: false
    };
    const wrapper = shallow(<News {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
