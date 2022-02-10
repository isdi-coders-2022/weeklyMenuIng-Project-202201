import { render, screen } from "@testing-library/react";
import ApiContextProvider from "../store/contexts/ApiContext/ApiContextProvider";
import RecipesContextProvider from "../store/contexts/RecipesContext/RecipesContextProvider";
import EditRecipePage from "./EditRecipePage";

describe("Given an EditRecipe page", () => {
  describe("When it's rendered", () => {
    test("Then it should render an Edit Recipe text", () => {
      render(
        <ApiContextProvider>
          <RecipesContextProvider>
            <EditRecipePage />
          </RecipesContextProvider>
        </ApiContextProvider>
      );
      const edit = screen.queryByText("Edit Recipe");

      expect(edit).not.toBeNull();
    });
  });
});
