import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import UsersList from "./users-list";

test("renders <Users>", async () => {
  render(<UsersList />);

  await waitFor(() => {
    expect(screen.queryByText("Loading users...", { exact: false })).toBeNull();
  });

  const userNames = screen.getAllByTestId("user-name");
  expect(userNames.length).toBe(5);
});
