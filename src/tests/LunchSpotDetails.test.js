import React from "react";
import { render } from "@testing-library/react";

import LunchSpotDetails from "../components/LunchSpotDetails";
import { fakeRestaurantDetails } from "./mock-data/restaurants";

it("renders <LunchSpotDetails />", () => {
  const { getByRole } = render(<LunchSpotDetails restaurant={fakeRestaurantDetails[0]} />);
  expect(getByRole("table")).toBeTruthy();
});
