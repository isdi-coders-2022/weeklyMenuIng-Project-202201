import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When instantiated", () => {
    test("It should render a button", () => {
      render(<Button text="" className="" actionOnClick={() => null} />);

      const button = screen.queryByRole("button");

      expect(button).toBeInTheDocument();
    });
  });

  describe("When instantiated with text 'Add recipe'", () => {
    test("It should render text 'Add recipe'", () => {
      const text = "Add recipe";
      render(<Button text={text} className="" actionOnClick={() => null} />);

      const displayedText = screen.queryByText(text);

      expect(displayedText).toBeInTheDocument();
    });
  });

  describe("When it's instantiated with an action", () => {
    test("Then it should call an action function on click", () => {
      const action = jest.fn();

      render(<Button text="" className="" actionOnClick={action} />);

      const button = screen.queryByRole("button");

      userEvent.click(button);

      expect(action).toHaveBeenCalled();
    });
  });
});
