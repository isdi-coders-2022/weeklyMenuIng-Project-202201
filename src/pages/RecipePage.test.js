import { render, screen } from "@testing-library/react";
import ApiContextProvider from "../store/contexts/ApiContext/ApiContextProvider";
import MyRecipesContextProvider from "../store/contexts/RecipesContext/RecipesContextProvider";
import RecipePage from "./NewRecipePage";

describe("Given a Recipe page", () => {
  describe("When it's rendered", () => {
    test("Then it should render a title", () => {
      render(
        <ApiContextProvider>
          <MyRecipesContextProvider>
            <RecipePage />
          </MyRecipesContextProvider>
        </ApiContextProvider>
      );
      const recipe = screen.queryByRole("heading");

      expect(recipe).toBeVisible();
    });
  });
});
