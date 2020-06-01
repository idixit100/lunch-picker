import React from "react";
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";

import NavBar from "../components/NavBar";

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

it("renders <NavBar />", () => {
  act(() => {
    render(<NavBar />, container);
  });
  expect(container.textContent).toBe("NavBar");
});
