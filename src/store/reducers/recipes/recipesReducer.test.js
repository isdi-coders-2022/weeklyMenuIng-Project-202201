import { createRecipeAction } from "../../actions/recipes/recipesActionsCreator";
import recipesReducer from "./recipesReducer";

describe("Given a recipesReducer", () => {
  describe("When it's called with action type createRecipe and passed a recipe", () => {
    test("Then it should return a newState with all the previous recipes and the recipe inside action", () => {
      const currentState = [{ label: "chicken" }];
      const recipeToAdd = { label: "spaggetti" };
      const action = createRecipeAction({ ...recipeToAdd });
      const expectedNewState = [...currentState, { ...recipeToAdd }];

      const newState = recipesReducer(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
