import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given a notFoundPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the text Haiouuu!!! Nothing here. Page not found", () => {
      const expectedText = "Haiouuu!!! Nothing here. Page not found";

      render(<NotFoundPage />);

      const textInScreen = screen.queryByText(expectedText);
      expect(textInScreen).not.toBeNull();
    });
  });
});
