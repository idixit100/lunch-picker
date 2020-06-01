import React from "react";
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";

import LunchPickerPanel from "../components/LunchPickerPanel";

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

it("renders <LunchPickerPanel />", () => {
  act(() => {
    render(<LunchPickerPanel />, container);
  });
  expect(container.textContent).toBe("Panel");
});
