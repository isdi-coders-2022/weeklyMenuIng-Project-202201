import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FloatingMenu from "./FloatingMenu";

describe("Given a FloatingMenu component", () => {
  describe("When it's rendered passing isActive as true", () => {
    test("Then it should render a list", () => {
      render(
        <BrowserRouter>
          <FloatingMenu isActive={true} />
        </BrowserRouter>
      );

      const list = screen.queryByRole("list");

      expect(list).not.toBeNull();
    });
  });
  describe("When it's rendered passing isActive as false", () => {
    test("Then it shouldnt render a list", () => {
      render(
        <BrowserRouter>
          <FloatingMenu isActive={false} />
        </BrowserRouter>
      );

      const list = screen.queryByRole("list");
      expect(list).toBeNull();
    });
  });
});
