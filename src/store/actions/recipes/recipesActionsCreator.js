import { actionTypes } from "./recipesActionsTypes";

export const loadRecipesAction = (recipes) => ({
  type: actionTypes.loadRecipes,
  recipes,
});

export const loadMoreRecipesAction = (recipes) => ({
  type: actionTypes.loadMoreRecipes,
  recipes,
});

export const createRecipeAction = (recipe) => ({
  type: actionTypes.createRecipe,
  recipe,
});

export const removeRecipeAction = (id) => ({
  type: actionTypes.removeRecipe,
  id,
});

export const updateRecipeAction = (recipe) => ({
  type: actionTypes.updateRecipe,
  recipe,
});

export const addRecipeToMyListAction = (recipe) => ({
  type: actionTypes.addRecipeToMyList,
  recipe,
});

export const dragRecipeAction = (source, destination) => ({
  type: "drag-recipe",
  source,
  destination,
});
