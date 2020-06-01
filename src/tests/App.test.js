import React from "react";
import { render } from "@testing-library/react";

import App from "../components/App";

it("renders <App />", () => {
  const { getByText, getByRole } = render(<App />)
  expect(getByText("NavBar")).toBeTruthy();
  expect(getByRole("button", {"name": /pick/i })).toBeTruthy();
  expect(getByText(/recommendation/i)).toBeTruthy();
});
