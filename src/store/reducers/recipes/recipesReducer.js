import { actionTypes } from "../../actions/recipes/recipesActionsTypes";

const recipesReducer = (currentState, action) => {
  let newState;

  switch (action.type) {
    case actionTypes.createRecipe:
      action.recipe
        ? (newState = [...currentState, { ...action.recipe }])
        : (newState = [...currentState]);
      break;
    case actionTypes.loadRecipes:
      action.recipes
        ? (newState = [...action.recipes.hits])
        : (newState = [...currentState]);
      break;
    case actionTypes.loadMoreRecipes:
      action.recipes
        ? (newState = [...currentState, [...action.recipes.hits]].flat())
        : (newState = [...currentState]);
      break;
    case actionTypes.removeRecipe:
      newState = [...currentState].filter((recipe) => recipe.id !== action.id);
      break;
    case actionTypes.updateRecipe:
      newState = [...currentState].map((recipe) =>
        recipe.id === action.recipe.id ? { ...action.recipe } : { ...recipe }
      );
      break;

    default:
      newState = [...currentState];
      break;
  }

  return newState;
};

export default recipesReducer;
