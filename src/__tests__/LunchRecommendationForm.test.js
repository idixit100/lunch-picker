import React from "react";
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";

import LunchRecommendationForm from "../components/LunchRecommendationForm";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders <LunchRecommendationForm />", () => {
  act(() => {
    render(<LunchRecommendationForm />, container);
  });
  expect(container.textContent).toBe("RecommendationForm");
});
