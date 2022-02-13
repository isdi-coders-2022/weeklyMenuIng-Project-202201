import { loadRecipesAction } from "../../actions/recipes/recipesActionsCreator";
import recipesReducer from "./recipesReducer";

describe("Given a recipesReducer", () => {
  describe("When it's called with an action type loadRecipes and provide an array of recipes", () => {
    test("Then it should return a new state with all the recipes that came inside the action", () => {
      const currentState = [];
      const recipes = { hits: [{ label: "chicken" }, { label: "macarroni" }] };
      const action = loadRecipesAction(recipes);
      const expectedNewState = [...recipes.hits];

      const newState = recipesReducer(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with an action type loadRecipes and provide no recipes", () => {
    test("Then it should return a new state equal to currentState", () => {
      const currentState = [];
      const action = loadRecipesAction();
      const expectedNewState = [];

      const newState = recipesReducer(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
