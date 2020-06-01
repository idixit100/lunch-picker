import React from "react";
import { render } from "@testing-library/react";

import LunchSpotDetails from "../components/LunchSpotDetails";

it("renders <LunchSpotDetails />", () => {
  const { getByText } = render(<LunchSpotDetails />);
  expect(getByText("LunchDetails")).toBeTruthy();
});
