import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

test("App Router: Works with Server Components", () => {
  render(<Page />);
  expect(
    screen.getByRole("heading", { level: 2, name: "Main App" })
  ).toBeDefined();
});
