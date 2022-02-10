import { render, screen } from "@testing-library/react";
import SearchRecipesForm from "./SearchRecipesForm";
import ApiContextProvider from "../../store/contexts/ApiContext/ApiContextProvider";
import RecipesContextProvider from "../../store/contexts/RecipesContext/RecipesContextProvider";
import MyRecipesContextProvider from "../../store/contexts/MyRecipesContext/MyRecipesContextProvider";

describe("Given a SearchRecipesForm Component", () => {
  describe("When it's rendered", () => {
    test("Then a form should be displayed", () => {
      render(
        <ApiContextProvider>
          <MyRecipesContextProvider>
            <RecipesContextProvider>
              <SearchRecipesForm />
            </RecipesContextProvider>
          </MyRecipesContextProvider>
        </ApiContextProvider>
      );
      const formInput = screen.queryByPlaceholderText(
        "write some ingredients..."
      );

      expect(formInput).toBeInTheDocument();
    });

    test("Then a form should display 6 checkboxes", () => {
      const expectedNumberOfCheckboxes = 6;
      render(
        <ApiContextProvider>
          <MyRecipesContextProvider>
            <RecipesContextProvider>
              <SearchRecipesForm />
            </RecipesContextProvider>
          </MyRecipesContextProvider>
        </ApiContextProvider>
      );

      const numOfCheckboxes = screen.queryAllByRole("checkbox").length;

      expect(numOfCheckboxes).toBe(expectedNumberOfCheckboxes);
    });
  });

  describe("submit button", () => {
    test("is disabled when instantiaded with empty text input", () => {
      render(
        <ApiContextProvider>
          <MyRecipesContextProvider>
            <RecipesContextProvider>
              <SearchRecipesForm />
            </RecipesContextProvider>
          </MyRecipesContextProvider>
        </ApiContextProvider>
      );

      expect(screen.getByText("Search recipes")).toBeDisabled();
    });
  });
});
