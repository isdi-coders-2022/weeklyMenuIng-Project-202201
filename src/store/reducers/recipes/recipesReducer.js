import { actionTypes } from "../../actions/recipes/recipesActionsTypes";

const recipesReducer = (currentState, action) => {
  let newState;

  switch (action.type) {
    case actionTypes.loadRecipes:
      newState = action.recipes ? [...action.recipes.hits] : [...currentState];
      break;
    case actionTypes.loadMoreRecipes:
      newState = action.recipes
        ? [...currentState, [...action.recipes.hits]].flat()
        : [...currentState];
      break;
    default:
      newState = [...currentState];
      break;
  }

  return newState;
};

export default recipesReducer;
