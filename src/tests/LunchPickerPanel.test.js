import React from "react";
import { render, fireEvent, screen, getByText, waitFor } from "@testing-library/react";

import LunchPickerPanel from "../components/LunchPickerPanel";
import { fetchRestaurants } from "../services";
import { fakeRestaurantDetails } from "./mock-data/restaurants"

jest.mock("../services");

const pick_button = /pick/i;
const spin_again_button = /again/i;

beforeEach(() => {
  render(<LunchPickerPanel />);
});

afterEach(() => {
  fetchRestaurants.mockReset();
});

it("renders <LunchPickerPanel />", () => {
  expect(screen.queryByRole("button", {name: pick_button})).toBeTruthy();
  expect(screen.queryByRole("button", {name: spin_again_button})).toBeTruthy();
  expect(screen.queryByRole("table")).toBeFalsy(); 
});

it("handles fetching data when requested to pick a spot", async () => {
  fetchRestaurants.mockResolvedValue(fakeRestaurantDetails);
  fireEvent.click(screen.getByRole("button", {name: pick_button}));

  await waitFor(() => expect(screen.getByRole("table")).toBeTruthy());
})

it("spin again button works after picking a lunch spot", async () => {
  fetchRestaurants.mockResolvedValue(fakeRestaurantDetails);
  fireEvent.click(screen.getByRole("button", {name: spin_again_button}));
  expect(screen.queryByRole("table")).toBeFalsy();

  fireEvent.click(screen.getByRole("button", {name: pick_button}));

  await waitFor(() => { 
    fireEvent.click(screen.getByRole("button", {name: spin_again_button}));
    expect(screen.getByRole("table")).toBeTruthy();
  })
})
