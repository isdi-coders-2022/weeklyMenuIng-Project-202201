import { render, screen } from "@testing-library/react";
import BurgerComponent from "./BurgerComponent";
import userEvents from "@testing-library/user-event";

describe("Given a BurgerComponent component", () => {
  describe("When it's rendered passing a function", () => {
    test("Then the action should be called on click", () => {
      const action = jest.fn();
      const titleText = "Navigation Menu";

      render(<BurgerComponent actionOnClick={action} />);
      const burger = screen.queryByTitle(titleText);
      userEvents.click(burger);

      expect(action).toHaveBeenCalled();
    });
  });
});
