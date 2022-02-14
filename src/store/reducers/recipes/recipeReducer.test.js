import recipeReducer from "./recipeReducer";
import { getRecipeAction } from "../../actions/recipes/recipesActionsCreator";

describe("Given a recipeReducer", () => {
  describe("When it's called with an action type getRecipe and provide an image value", () => {
    test("Then it should return a new state with an image that came inside the action", () => {
      const currentState = [];
      const recipe = {
        image:
          "https://www.edamam.com/web-img/74b/74bfb16655500083c4af92bcf45889f7.jpg",
      };
      const action = getRecipeAction(recipe);
      const expectedNewState = recipe;

      const newState = recipeReducer(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with an action type getRecipe and provide no recipe", () => {
    test("Then it should return a new state equal to currentState", () => {
      const currentState = {};
      const action = getRecipeAction();
      const expectedNewState = {};

      const newState = recipeReducer(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
