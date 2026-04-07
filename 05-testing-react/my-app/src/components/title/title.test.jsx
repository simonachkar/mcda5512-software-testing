import { render } from "@testing-library/react";
import Title from "./title";

test("renders <Title>", () => {
  const { container } = render(<Title />);
  expect(container.querySelector("h1").textContent).toBe("Hello World!");
});
