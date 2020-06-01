import React from "react";
import { render } from "@testing-library/react";

import LunchRecommendationForm from "../components/LunchRecommendationForm";

it("renders <LunchRecommendationForm />", () => {
  const { getByText } = render(<LunchRecommendationForm />);

  expect(getByText("RecommendationForm")).toBeTruthy();
});
