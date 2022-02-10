import { render, screen } from "@testing-library/react";
import ApiContextProvider from "../../store/contexts/ApiContext/ApiContextProvider";
import RecipesContextProvider from "../../store/contexts/RecipesContext/RecipesContextProvider";
import RecipesList from "./RecipesList";
import { server } from "../../mocks/server";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
describe("Given a recipesList component", () => {
  describe("When it's rendered", () => {
    test("Then it should render the recipes receibed via context", async () => {
      render(
        <ApiContextProvider>
          <RecipesContextProvider>
            <RecipesList />
          </RecipesContextProvider>
        </ApiContextProvider>
      );

      const recipes = await screen.findAllByRole("list");

      expect(recipes).not.toBeNull();
    });
  });
});
