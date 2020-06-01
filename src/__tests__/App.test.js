import React from "react";
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";

import App from "../components/App";

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

it("renders <App />", () => {
  act(() => {
    render(<App />, container);
  });
  expect(container.textContent).toBe("NavBarPanelRecommendationForm");
});
