import { actionTypes } from "./recipesActionsTypes";

export const loadRecipesAction = (recipes) => ({
  type: actionTypes.loadRecipes,
  recipes,
});

export const loadMoreRecipesAction = (recipes) => ({
  type: actionTypes.loadMoreRecipes,
  recipes,
});
