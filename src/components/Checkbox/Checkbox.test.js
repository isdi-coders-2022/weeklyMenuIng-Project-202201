import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
      const text = "";
      render(<Checkbox text={text} />);

      const displayedBox = screen.queryByRole("checkbox");

      expect(displayedBox).toBeInTheDocument();
    });
  });

  describe("When instantiated with an onChange action", () => {
    test("It should call action when clicked on it", () => {
      const text = "";

      const action = jest.fn();

      render(<Checkbox text={text} onChange={action} />);

      const checkbox = screen.queryByRole("checkbox");

      userEvent.click(checkbox);

      expect(action).toHaveBeenCalled();
    });
  });
});
