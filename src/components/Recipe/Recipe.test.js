import { render, screen } from "@testing-library/react";
import Recipe from "./Recipe";
import userEvent from "@testing-library/user-event";

describe("Given a Recipe component", () => {
  const edamamJSON = require("./edamamResponse.json");
  const edamamReceipes = edamamJSON.hits;
  const edamamRecipe = edamamReceipes[3];
  const expectedTitle = edamamRecipe.recipe.label;

  describe("When instantiated with a recipe", () => {
    test("Then it should render an element with text in recipe.label", () => {
      render(<Recipe className={"whatever"} element={edamamRecipe} />);

      const recepta = screen.queryByText(expectedTitle);

      expect(recepta).toBeInTheDocument();
    });
  });

  describe("When it's instantiated with an action", () => {
    test("Then it should call an action function on click", () => {
      const action = jest.fn();

      render(<Recipe className={"whatever"} element={edamamRecipe} />);

      const viewRecipeButton = screen.queryByText("view recipe source");

      userEvent.click(viewRecipeButton);

      expect(action).toHaveBeenCalled();
    });
  });
});
