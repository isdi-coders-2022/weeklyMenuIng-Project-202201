import { render, screen } from "@testing-library/react";
import ApiContextProvider from "../store/contexts/ApiContext/ApiContextProvider";
import RecipesContextProvider from "../store/contexts/RecipesContext/RecipesContextProvider";
import NewRecipePage from "./NewRecipePage";

describe("Given an NewRecipe page", () => {
  describe("When it's rendered", () => {
    test("Then it should render Create new recipe text", () => {
      render(
        <ApiContextProvider>
          <RecipesContextProvider>
            <NewRecipePage />
          </RecipesContextProvider>
        </ApiContextProvider>
      );
      const newRecipe = screen.queryByText("Create new recipe");

      expect(newRecipe).not.toBeNull();
    });
  });
});
