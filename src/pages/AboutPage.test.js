import { render, screen } from "@testing-library/react";
import ApiContextProvider from "../store/contexts/ApiContext/ApiContextProvider";
import RecipesContextProvider from "../store/contexts/RecipesContext/RecipesContextProvider";
import AboutPage from "./AboutPage";

describe("Given an About page", () => {
  describe("When it's rendered", () => {
    test("Then it should render an about text", () => {
      render(
        <ApiContextProvider>
          <RecipesContextProvider>
            <AboutPage />
          </RecipesContextProvider>
        </ApiContextProvider>
      );
      const about = screen.queryByText("About");

      expect(about).not.toBeNull();
    });
  });
});
