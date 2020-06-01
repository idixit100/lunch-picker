import React from "react";
import { render } from "@testing-library/react";

import NavBar from "../components/NavBar";

it("renders <NavBar />", () => {
  const { getByText } = render(<NavBar />);
  expect(getByText("NavBar")).toBeTruthy();
});
