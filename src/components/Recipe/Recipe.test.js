import { render, screen } from "@testing-library/react";
import Recipe from "./Recipe";

describe("Given a Recipe component", () => {
  const edamamJSON = require("./edamamResponse.json");
  const edamamReceipes = edamamJSON.hits;
  const edamamRecipe = edamamReceipes[3];

  describe("When instantiated with an edamam object as props", () => {
    test("Then it should render an element with an image", () => {
      render(<Recipe className={"whatever"} element={edamamRecipe} />);

      const recepta = screen.queryByText(edamamRecipe.recipe.label);

      expect(recepta).toBeInTheDocument();
    });
  });
});
