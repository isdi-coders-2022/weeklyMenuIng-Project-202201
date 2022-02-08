import { render, screen } from "@testing-library/react";
import DayRecipe from "./DayRecipe";

describe("Given a DayRecipe component", () => {
  describe("When it receibes a recipe", () => {
    test("Then it should render the recipe label", () => {
      const mockObject = { recipe: { label: "spagetti", image: "urltoimg" } };

      render(<DayRecipe recipe={mockObject} />);

      const label = screen.queryByText(mockObject.recipe.label);

      expect(label).toBeInTheDocument();
    });
    test("Then it should render the recipe image", () => {
      const mockObject = { recipe: { label: "spagetti", image: "urltoimg" } };

      render(<DayRecipe recipe={mockObject} />);

      const image = screen.queryByAltText(mockObject.recipe.label);

      expect(image).toBeInTheDocument();
    });
  });
});
