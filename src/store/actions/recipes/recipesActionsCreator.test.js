import {
  loadRecipesAction,
  createRecipeAction,
  removeRecipeAction,
  updateRecipeAction,
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

  describe("When the function createRecipeAction is called", () => {
    test("Then it should return an object with type create recipe and the object passed", () => {
      const createRecipeType = actionTypes.createRecipe;
      const mockObject = { recipe: { test: "test" } };
      const expectedAction = { type: createRecipeType, recipe: mockObject };

      const action = createRecipeAction(mockObject);
      expect(action).toEqual(expectedAction);
    });
  });

  describe("When the function removeRecipeAction is called", () => {
    test("Then it should return an object with type remove recipe and the id passed", () => {
      const removeRecipeType = actionTypes.removeRecipe;
      const mockId = "soyprogramadoraeonstuhaidoes";
      const expectedAction = { type: removeRecipeType, id: mockId };

      const action = removeRecipeAction(mockId);
      expect(action).toEqual(expectedAction);
    });
  });

  describe("When the function updateRecipe is called", () => {
    test("Then it should return an object with type update recipe and the object passed", () => {
      const updateRecipeType = actionTypes.updateRecipe;
      const mockObject = { test: "test" };
      const expectedAction = { type: updateRecipeType, recipe: mockObject };

      const action = updateRecipeAction(mockObject);
      expect(action).toEqual(expectedAction);
    });
  });
});
