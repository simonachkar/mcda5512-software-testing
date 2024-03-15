import ReactDOM from "react-dom";
import Title from "./title";

test("renders <Title>", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Title />, div);
  expect(div.querySelector("h1").textContent).toBe("Hello World!");
});
