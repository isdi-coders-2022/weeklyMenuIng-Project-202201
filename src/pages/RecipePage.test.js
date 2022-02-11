import { render, screen } from "@testing-library/react";
import ApiContextProvider from "../store/contexts/ApiContext/ApiContextProvider";
import RecipesContextProvider from "../store/contexts/RecipesContext/RecipesContextProvider";
import MyRecipesContextProvider from "../store/contexts/MyRecipesContext/MyRecipesContextProvider";
import RecipePage from "./NewRecipePage";

describe("Given a Recipe page", () => {
  describe("When it's rendered", () => {
    test("Then it should render a title", () => {
      render(
        <ApiContextProvider>
          <MyRecipesContextProvider>
            <RecipesContextProvider>
              <RecipePage />
            </RecipesContextProvider>
          </MyRecipesContextProvider>
        </ApiContextProvider>
      );
      const recipe = screen.queryByRole("heading");

      expect(recipe).toBeVisible();
    });
  });
});
