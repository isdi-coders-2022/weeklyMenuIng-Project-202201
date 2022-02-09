import { actionTypes } from "../../actions/recipes/recipesActionsTypes";

const recipesReducer = (currentState, action) => {
  let newState;

  switch (action.type) {
    case actionTypes.createRecipe:
      newState = [...currentState, action.recipe];
      break;
    case actionTypes.loadRecipes:
      newState = [...currentState, action.recipes];
      break;
    case actionTypes.removeRecipe:
      newState = [...currentState].filter((recipe) => recipe.id !== action.id);
      break;
    case actionTypes.updateRecipe:
      newState = [...currentState].map((recipe) =>
        recipe.id === action.recipe.id ? action.recipe : recipe
      );
      break;

    default:
      newState = [...currentState];
      break;
  }

  return newState;
};

export default recipesReducer;
