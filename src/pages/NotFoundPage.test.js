import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given a notFoundPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the text Haiouuu!!! Nothing here. No food, no beer, no page!", () => {
      const expectedText =
        "Haiouuu!!! Nothing here. No food, no beer, no page!";

      render(<NotFoundPage />);

      const textInScreen = screen.queryByText(expectedText);
      expect(textInScreen).not.toBeNull();
    });
  });
});
