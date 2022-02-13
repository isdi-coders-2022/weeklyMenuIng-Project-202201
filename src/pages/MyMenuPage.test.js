import { render, screen } from "@testing-library/react";
import ApiContextProvider from "../store/contexts/ApiContext/ApiContextProvider";
import RecipesContextProvider from "../store/contexts/RecipesContext/RecipesContextProvider";
import MyMenuPage from "./MyMenuPage";
import MyRecipesContextProvider from "../store/contexts/MyRecipesContext/MyRecipesContextProvider";
import { BrowserRouter } from "react-router-dom";

describe("Given a my menu page", () => {
  describe("When it's rendered", () => {
    test("Then it should render a list", () => {
      render(
        <ApiContextProvider>
          <MyRecipesContextProvider>
            <RecipesContextProvider>
              <BrowserRouter>
                <MyMenuPage />
              </BrowserRouter>
            </RecipesContextProvider>
          </MyRecipesContextProvider>
        </ApiContextProvider>
      );
      const list = screen.queryAllByRole("list");

      expect(list).not.toBeNull();
    });
  });
});
