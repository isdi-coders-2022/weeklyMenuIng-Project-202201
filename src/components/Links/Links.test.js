import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Links from "./Links";

describe("Given a Links component", () => {
  describe("When it's rendered", () => {
    test("then it shoul display the links text", () => {
      const linksText = [
        "My Weekly Menu",
        "Search Recipes",
        "Create New Recipe",
        "About",
      ];

      render(
        <BrowserRouter>
          <Links />
        </BrowserRouter>
      );

      linksText.forEach((textLink) => {
        const text = screen.queryByText(textLink);
        expect(text).toBeInTheDocument();
      });
    });
  });

  describe("When a link is clicked", () => {
    test("Then it should trigger an action", () => {});
  });
});
