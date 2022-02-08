import { actionTypes } from "./recipesActionsTypes";

export const createRecipeAciton = (recipe) => ({
  type: actionTypes.createRecipe,
  recipe,
});

export const removeRecipeAction = (id) => ({
  type: actionTypes.removeRecipe,
  id,
});

export const updateRecipe = (recipe) => ({
  type: actionTypes.updateRecipe,
  recipe,
});
