import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import App from "./src/App";
import ApiContextProvider from "./src/store/contexts/ApiContext/ApiContextProvider";
import RecipesContextProvider from "./src/store/contexts/RecipesContext/RecipesContextProvider";

describe("Given a App component", () => {
  describe("When it's rendered", () => {
    test("then it shoul display the links text", () => {
      const linksText = [
        "My Weekly Menu",
        "Search Recipes",
        "Create New Recipe",
        "About",
      ];

      render(
        <ApiContextProvider>
          <RecipesContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </RecipesContextProvider>
        </ApiContextProvider>
      );

      linksText.forEach((textLink) => {
        const text = screen.queryByText(textLink);
        expect(text).toBeInTheDocument();
      });
      test("Then it shoul My Weekly Menu", () => {
        render(
          <ApiContextProvider>
            <RecipesContextProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </RecipesContextProvider>
          </ApiContextProvider>
        );

        const expectedText = screen.queryByText("My Weekly Menu");

        expect(expectedText).toBeInTheDocument();
      });
      test("then it should match the snapshot", () => {
        const app = TestRenderer.create(<App />).toJSON();

        expect(app).toMatchSnapshot();
      });
    });
  });

  describe("When a link is clicked", () => {
    test("Then it should trigger an action", () => {});
  });
});
