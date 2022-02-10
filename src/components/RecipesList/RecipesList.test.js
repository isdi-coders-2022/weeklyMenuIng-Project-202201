import { render, screen } from "@testing-library/react";
import ApiContextProvider from "../../store/contexts/ApiContext/ApiContextProvider";
import RecipesContextProvider from "../../store/contexts/RecipesContext/RecipesContextProvider";
import RecipesList from "./RecipesList";

describe("Given a recipesList component", () => {
  describe("When it's rendered", () => {
    test("Then it should render the recipes receibed via context", async () => {
      const expectedNumberOfRecipes = 2;

      render(
        <ApiContextProvider>
          <RecipesContextProvider>
            <RecipesList />
          </RecipesContextProvider>
        </ApiContextProvider>
      );

      const recipes = screen.queryAllByRole("");

      expect(recipes.length).toBe(expectedNumberOfRecipes);
    });
  });
});
