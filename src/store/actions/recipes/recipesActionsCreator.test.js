import {
  loadMoreRecipesAction,
  loadRecipesAction,
} from "./recipesActionsCreator";
import { actionTypes } from "./recipesActionsTypes";

describe("Given a recipesActionsCreator set", () => {
  describe("When the function loadRecipesAction is called", () => {
    test("Then it should return an object with type load recipe and the object passed", () => {
      const loadRecipesType = actionTypes.loadRecipes;
      const mockObject = [
        { recipe: { test: "test" } },
        { recipe: { test: "test" } },
      ];
      const expectedAction = { type: loadRecipesType, recipes: mockObject };

      const action = loadRecipesAction(mockObject);
      expect(action).toEqual(expectedAction);
    });
  });

  describe("When the function loadMoreRecipesAction is called passing a recipes object", () => {
    test("Then it should return an object with type load more recipes and the object passed", () => {
      const loadMoreRecipesTipe = actionTypes.loadMoreRecipes;
      const mockObject = [
        { recipe: { test: "test" } },
        { recipe: { test: "test" } },
      ];
      const expectedAction = { type: loadMoreRecipesTipe, recipes: mockObject };

      const action = loadMoreRecipesAction(mockObject);
      expect(action).toEqual(expectedAction);
    });
  });
});
