import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header from "./Header";
import TestRenderer from "react-test-renderer";

describe("Given a Header Component", () => {
  describe("When it's rendered", () => {
    test("Then the logo should display", () => {
      const altTextLogo = "My weekly menu logo";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const logo = screen.queryByAltText(altTextLogo);

      expect(logo).toBeInTheDocument();
    });
    test("Then it should match the snapshot", () => {
      const header = TestRenderer.create(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      ).toJSON();

      expect(header).toMatchSnapshot();
    });
  });

  describe("Wher it's rendered and cilcked on the burger menu", () => {
    test("Then the burger menu should have class active", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const burger = screen.queryByTitle("Navigation Menu");
      userEvent.click(burger);

      expect(burger).toHaveClass("active");
    });
  });
  describe("Wher it's rendered and cilcked two times on the burger menu", () => {
    test("Then the burger menu should not have class active", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const burger = screen.queryByTitle("Navigation Menu");
      userEvent.dblClick(burger);

      expect(burger).not.toHaveClass("active");
    });
  });
});
