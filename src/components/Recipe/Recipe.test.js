import { render, screen } from "@testing-library/react";
import Recipe from "./Recipe";

describe("Given a Recipe component", () => {
  const edamamJSON = require("./edamamResponse.json");
  const edamamReceipes = edamamJSON.hits;
  const edamamRecipe = edamamReceipes[3];
  const expectedTitle = edamamRecipe.recipe.label;

  describe("When instantiated with a recipe", () => {
    test("Then it should render an recipe with text in recipe.label", () => {
      render(<Recipe recipe={edamamRecipe} />);

      const recepta = screen.queryByText(expectedTitle);

      expect(recepta).toBeInTheDocument();
    });
  });
});
