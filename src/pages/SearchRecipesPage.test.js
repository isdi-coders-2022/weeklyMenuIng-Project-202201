import { render, screen } from "@testing-library/react";
import ApiContextProvider from "../store/contexts/ApiContext/ApiContextProvider";
import RecipesContextProvider from "../store/contexts/RecipesContext/RecipesContextProvider";
import MyRecipesContextProvider from "../store/contexts/MyRecipesContext/MyRecipesContextProvider";
import SearchRecipesPage from "./SearchRecipesPage";
import { BrowserRouter } from "react-router-dom";

describe("Given a SearchRecipesPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should render a SearchForm Component", () => {
      render(
        <ApiContextProvider>
          <MyRecipesContextProvider>
            <RecipesContextProvider>
              <BrowserRouter>
                <SearchRecipesPage />
              </BrowserRouter>
            </RecipesContextProvider>
          </MyRecipesContextProvider>
        </ApiContextProvider>
      );
      const list = screen.queryByRole("list");
      expect(list).not.toBeNull();
    });
  });
});
