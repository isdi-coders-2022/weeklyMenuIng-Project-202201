import { render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";

describe("Given a Checkbox component", () => {
  describe("When instantiated with text 'Friday'", () => {
    test("It should render an element with text 'Friday'", () => {
      const text = "Friday";
      render(<Checkbox text={text} />);

      const displayedText = screen.queryByText(text);

      expect(displayedText).toBeInTheDocument();
    });
  });
  describe("When instantiated", () => {
    test("Then it should render a checkbox element", () => {
      const text = "Friday";
      render(<Checkbox text={text} />);

      const displayedBox = screen.queryByRole("checkbox");

      expect(displayedBox).toBeInTheDocument();
    });
  });
});
