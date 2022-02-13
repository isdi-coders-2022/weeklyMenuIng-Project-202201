import { actionTypes } from "../../actions/recipes/recipesActionsTypes";

const recipeReducer = (currentRecipe, action) => {
  let newState;

  switch (action.type) {
    case actionTypes.getRecipe:
      newState = { ...action.recipe };
      break;

    default:
      newState = { ...currentRecipe };
  }

  return newState;
};

export default recipeReducer;
