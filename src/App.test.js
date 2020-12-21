import { render, screen } from "@testing-library/react";
import App from "./App";
import ReactDOM from "react-dom";

test("renders learn react link", () => {
  render(<App />);

  const target = screen.getByText("context");
  expect(target).toBeInTheDocument();
  expect(target).toBeVisible();
  expect(target).toContainHTML("context");
});
