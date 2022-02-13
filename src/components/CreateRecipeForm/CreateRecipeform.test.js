import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ApiContextProvider from "../../store/contexts/ApiContext/ApiContextProvider";
import MyRecipesContextProvider from "../../store/contexts/MyRecipesContext/MyRecipesContextProvider";
import RecipesContextProvider from "../../store/contexts/RecipesContext/RecipesContextProvider";
import CreateRecipeForm from "./CreateRecipeForm";

describe("Given a Create Recipe form", () => {
  describe("When it's rendered and typed on the name input", () => {
    test("Then the label input should contain the text typed", () => {
      const inputPlaceholder = "You'r recipe name";

      render(
        <MyRecipesContextProvider>
          <RecipesContextProvider>
            <ApiContextProvider>
              <CreateRecipeForm />
            </ApiContextProvider>
          </RecipesContextProvider>
        </MyRecipesContextProvider>
      );

      const input = screen.queryByPlaceholderText(inputPlaceholder);
      userEvent.type(input, "text");
      expect(input).toHaveDisplayValue("text");
    });
  });

  describe("When it's rendered and clicked on the dietlabels label", () => {
    test("Then the focus should move to the dietlabels input", () => {
      const inputLabelTitle = "dietLabels";
      const inputPlaceholder = "Ex: low-sodium, vegan";

      render(
        <MyRecipesContextProvider>
          <RecipesContextProvider>
            <ApiContextProvider>
              <CreateRecipeForm />
            </ApiContextProvider>
          </RecipesContextProvider>
        </MyRecipesContextProvider>
      );

      const label = screen.queryByTitle(inputLabelTitle);
      userEvent.click(label);
      const input = screen.queryByPlaceholderText(inputPlaceholder);

      expect(input).toHaveFocus();
    });
  });
});
