import React from "react";
import renderer from "react-test-renderer";

import Header from "../header";

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Header pageClass="portfolio" title="Давид Кистаури >_<" link="" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
