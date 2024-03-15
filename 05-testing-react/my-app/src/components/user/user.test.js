// Use debug() to get a view of the component
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import User from "./user";
import { screen } from "@testing-library/react";

test("renders user details correctly", () => {
  const userProps = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    pictureURL: "https://example.com/johndoe.jpg",
    city: "New York",
    country: "USA",
  };

  render(<User {...userProps} />);

  expect(screen.getByTestId("user-name").textContent).toBe("John Doe");
  // expect(screen.getByText("Age: 30")).toBeTruthy(); // this won't work
  expect(screen.getByText("30")).toBeTruthy();
  expect(screen.getByText("john.doe@example.com")).toBeTruthy();
  expect(screen.queryByText("New York, USA")).toBeFalsy();

  const button = screen.getByTestId("user-btn");
  fireEvent.click(button);
  expect(screen.getByText("New York, USA")).toBeTruthy();
});

test("toggles address visibility on button click", () => {
  const userProps = {
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    email: "jane.smith@example.com",
    pictureURL: "https://example.com/janesmith.jpg",
    city: "London",
    country: "UK",
  };

  render(<User {...userProps} />);

  const button = screen.getByTestId("user-btn");
  fireEvent.click(button);
  expect(screen.getByText("London, UK")).toBeTruthy();

  fireEvent.click(button);
  expect(screen.queryByText("London, UK")).toBeFalsy();
});
