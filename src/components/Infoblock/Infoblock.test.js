import { render, screen } from "@testing-library/react";
import Infoblock from "./Infoblock";

describe("Given a Infoblock component", () => {
  describe("When instantiated with text 'Welcome to My Weekly Menu'", () => {
    test("It should render an element with text ''Welcome to My Weekly Menu'", () => {
      const text = "Welcome to My Weekly Menu";
      render(<Infoblock text={text} />);

      const displayedText = screen.queryByText(text);

      expect(displayedText).toBeInTheDocument();
    });
  });
});
