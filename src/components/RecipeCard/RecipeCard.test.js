import { render, screen } from "@testing-library/react";
import ApiContextProvider from "../../store/contexts/ApiContext/ApiContextProvider";
import MyRecipesContextProvider from "../../store/contexts/MyRecipesContext/MyRecipesContextProvider";
import RecipesContextProvider from "../../store/contexts/RecipesContext/RecipesContextProvider";
import RecipeCard from "./RecipeCard";

describe("Given a RecipeCard component", () => {
  const edamamJSON = require("./edamamResponse.json");
  const edamamReceipes = edamamJSON.hits;
  const edamamRecipe = edamamReceipes[3];

  describe("When instantiated with an edamam object as props", () => {
    test("Then it should render an element with the recipe label as title", () => {
      render(
        <ApiContextProvider>
          <MyRecipesContextProvider>
            <RecipesContextProvider>
              <RecipeCard recipe={edamamRecipe} />
            </RecipesContextProvider>
          </MyRecipesContextProvider>
        </ApiContextProvider>
      );

      const recepta = screen.queryByText(edamamRecipe.recipe.label);

      expect(recepta).toBeInTheDocument();
    });
  });
});
