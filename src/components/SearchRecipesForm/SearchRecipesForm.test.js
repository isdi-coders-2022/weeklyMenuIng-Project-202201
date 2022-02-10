import { render, screen } from "@testing-library/react";
import SearchRecipesForm from "./SearchRecipesForm";
import TestRenderer from "react-test-renderer";
import ApiContextProvider from "../../store/contexts/ApiContext/ApiContextProvider";
import RecipesContextProvider from "../../store/contexts/RecipesContext/RecipesContextProvider";

describe("Given a SearchRecipesForm Component", () => {
  describe("When it's rendered", () => {
    test("Then a form should be displayed", () => {
      render(
        <ApiContextProvider>
          <RecipesContextProvider>
            <SearchRecipesForm />
          </RecipesContextProvider>
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
          <RecipesContextProvider>
            <SearchRecipesForm />
          </RecipesContextProvider>
        </ApiContextProvider>
      );

      const numOfCheckboxes = screen.queryAllByRole("checkbox").length;

      expect(numOfCheckboxes).toBe(expectedNumberOfCheckboxes);
    });
  });

  test("Then it should match the snapshot", () => {
    const searchRecipesForm = TestRenderer.create(
      <SearchRecipesForm />
    ).toJSON();

    expect(searchRecipesForm).toMatchSnapshot();
  });

  describe("submit button", () => {
    test("is disabled when instantiaded with empty text input", () => {
      render(<SearchRecipesForm />);

      expect(screen.getByText("Search recipes")).toBeDisabled();
    });
  });
});
