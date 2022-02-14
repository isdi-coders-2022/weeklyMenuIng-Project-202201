import { render } from "@testing-library/react";
import ApiContextProvider from "../store/contexts/ApiContext/ApiContextProvider";
import RecipesContextProvider from "../store/contexts/RecipesContext/RecipesContextProvider";
import MyRecipesContextProvider from "../store/contexts/MyRecipesContext/MyRecipesContextProvider";
import RecipePage from "./RecipePage";
import { server } from "../mocks/server";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("Given a Recipe page", () => {
  describe("When it's rendered", () => {
    test("Then it should render a title", async () => {
      render(
        <ApiContextProvider>
          <MyRecipesContextProvider>
            <RecipesContextProvider>
              <RecipePage> </RecipePage>
            </RecipesContextProvider>
          </MyRecipesContextProvider>
        </ApiContextProvider>
      );
    });
  });
});
