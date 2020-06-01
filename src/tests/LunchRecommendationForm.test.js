import React from "react";
import { render } from "@testing-library/react";

import LunchRecommendationForm from "../components/LunchRecommendationForm";

it("renders <LunchRecommendationForm />", () => {
  const { getByRole, getByLabelText } = render(<LunchRecommendationForm />);

  expect(getByLabelText(/name/i)).toBeTruthy();
  expect(getByLabelText(/address/i)).toBeTruthy();
  expect(getByLabelText(/link/i)).toBeTruthy();
  expect(getByRole("button", {name: /submit/i})).toBeTruthy();
});
