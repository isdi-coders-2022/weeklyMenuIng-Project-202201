import { render, screen } from "@testing-library/react";
import RecipeCard from "./RecipeCard";

describe("Given a RecipeCard component", () => {
  const edamamJSON = require("./edamamResponse.json");
  const edamamReceipes = edamamJSON.hits;
  const edamamRecipe = edamamReceipes[3];

  describe("When instantiated with an edamam object as props", () => {
    test("Then it should render an element with the recipe label as title", () => {
      render(<RecipeCard className={"whatever"} recipe={edamamRecipe} />);

      const recepta = screen.queryByText(edamamRecipe.recipe.label);

      expect(recepta).toBeInTheDocument();
    });
  });
});
