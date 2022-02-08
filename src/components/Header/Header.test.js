import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

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
  });
});
