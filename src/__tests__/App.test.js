import React from "react";
import { render } from "@testing-library/react";

import App from "../components/App";

it("renders <App />", () => {
  const { getByText } = render(<App />);
  expect(getByText("NavBar")).toBeTruthy();
  expect(getByText("Panel")).toBeTruthy();
  expect(getByText("RecommendationForm")).toBeTruthy();
});
