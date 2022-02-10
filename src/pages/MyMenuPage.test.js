import { render, screen } from "@testing-library/react";
import ApiContextProvider from "../store/contexts/ApiContext/ApiContextProvider";
import RecipesContextProvider from "../store/contexts/RecipesContext/RecipesContextProvider";
import MyMenuPage from "./MyMenuPage";

describe("Given a my menu page", () => {
  describe("When it's rendered", () => {
    test("Then it should render a list", () => {
      render(
        <ApiContextProvider>
          <RecipesContextProvider>
            <MyMenuPage />
          </RecipesContextProvider>
        </ApiContextProvider>
      );
      const list = screen.queryByRole("list");

      expect(list).not.toBeNull();
    });
  });
});
