import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import UsersList from "./users-list";
import getRandomUser from "../../utils/get-random-user";

vi.mock("../../utils/get-random-user");

const mockUsers = Array.from({ length: 5 }, (_, i) => ({
  email: `user${i}@example.com`,
  name: { first: `First${i}`, last: `Last${i}` },
  dob: { age: 25 + i },
  picture: { large: `https://example.com/user${i}.jpg` },
  location: { city: `City${i}`, country: `Country${i}` },
}));

test("renders <Users>", async () => {
  getRandomUser.mockResolvedValue({ results: mockUsers });

  render(<UsersList />);

  await waitFor(() => {
    expect(screen.queryByText("Loading users...", { exact: false })).toBeNull();
  });

  const userNames = screen.getAllByTestId("user-name");
  expect(userNames.length).toBe(5);
});
