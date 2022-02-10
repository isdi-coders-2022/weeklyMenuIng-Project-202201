import {
  createRecipeAction,
  loadRecipesAction,
  removeRecipeAction,
  updateRecipeAction,
} from "../../actions/myRecpes/myRecipesActionsCreator";
import myRecipesReducer from "./myRecipesReducer";

describe("Given a recipesReducer", () => {
  describe("When it's called with action type createRecipe and passed a recipe", () => {
    test("Then it should return a newState with all the previous recipes and the recipe inside action", () => {
      const currentState = [{ label: "chicken" }];
      const recipeToAdd = { label: "spaggetti" };
      const action = createRecipeAction({ ...recipeToAdd });
      const expectedNewState = [...currentState, { ...recipeToAdd }];

      const newState = myRecipesReducer(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type createRecipe and passed no recipe", () => {
    test("Then it should return a newState equal to previous state", () => {
      const currentState = [{ label: "chicken" }];
      const action = createRecipeAction();
      const expectedNewState = [...currentState];

      const newState = myRecipesReducer(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type removeRecipe and passed a matching id", () => {
    test("Then it should return a new state without the recipe with matching id", () => {
      const currentState = [
        { label: "chicken", id: 3 },
        { label: "soup", id: 6 },
      ];
      const idOfRecipeToRemove = 6;
      const action = removeRecipeAction(idOfRecipeToRemove);
      const expectedNewState = [{ label: "chicken", id: 3 }];

      const newState = myRecipesReducer(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });
  describe("When it's called with action type removeRecipe and passed a non matching id", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const currentState = [
        { label: "chicken", id: 3 },
        { label: "soup", id: 6 },
      ];
      const action = removeRecipeAction();
      const expectedNewState = [...currentState];

      const newState = myRecipesReducer(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with an action type loadRecipes and provide an array of recipes", () => {
    test("Then it should return a new state with all the recipes that came inside the action", () => {
      const currentState = [];
      const recipes = [{ label: "chicken" }, { label: "macarroni" }];
      const action = loadRecipesAction(recipes);
      const expectedNewState = [...recipes];

      const newState = myRecipesReducer(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with an action type loadRecipes and provide no recipes", () => {
    test("Then it should return a new state equal to currentState", () => {
      const currentState = [];
      const action = loadRecipesAction();
      const expectedNewState = [];

      const newState = myRecipesReducer(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with an action type update recipe and provide a recipe with maching id", () => {
    test("then it should return a new state with the same amount of recipes", () => {
      const currentState = [
        { label: "coffe", id: 1 },
        { label: "salmon", id: 2 },
      ];
      const recipe = { label: "latte", id: 1 };
      const action = updateRecipeAction(recipe);
      const expectedLength = 2;

      const newState = myRecipesReducer(currentState, action);

      expect(newState.length).toBe(expectedLength);
    });

    test("then it should return a new state with the updated recipe and without the outdated recipe", () => {
      const currentState = [
        { label: "coffe", id: 1 },
        { label: "salmon", id: 2 },
      ];
      const newRecipe = { label: "latte", id: 1 };
      const outdatedRecipe = { label: "coffe", id: 1 };
      const action = updateRecipeAction(newRecipe);

      const newState = myRecipesReducer(currentState, action);

      expect(
        newState.some(
          (recipe) => JSON.stringify(recipe) === JSON.stringify(newRecipe)
        ) &&
          !newState.some(
            (recipe) =>
              JSON.stringify(recipe) === JSON.stringify(outdatedRecipe)
          )
      ).toBe(true);
    });
  });
  describe("When it's called with an action type update recipe and provide a recipe with no matching id", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const currentState = [{ label: "rice", id: 3 }];
      const newRecipe = [{ label: "carrot", id: 2 }];
      const action = updateRecipeAction(newRecipe);

      const newState = myRecipesReducer(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });
});
