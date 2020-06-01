import React from "react";
import { render } from "@testing-library/react";

import LunchPickerPanel from "../components/LunchPickerPanel";

it("renders <LunchPickerPanel />", () => {
  const { getByText } = render(<LunchPickerPanel />);
  expect(getByText("Panel")).toBeTruthy();
});
