import { actionTypes } from "../../actions/recipes/recipesActionsTypes";

const recipesReducer = (currentState, action) => {
  let newState;

  switch (action.type) {
    case actionTypes.createRecipe:
      newState = action.recipe
        ? [...currentState, { ...action.recipe }]
        : [...currentState];
      break;
    case actionTypes.loadRecipes:
      newState = action.recipes ? [...action.recipes.hits] : [...currentState];
      break;
    case actionTypes.loadMoreRecipes:
      newState = action.recipes
        ? [...currentState, [...action.recipes.hits]].flat()
        : [...currentState];
      break;
    case actionTypes.removeRecipe:
      newState = [...currentState].filter((recipe) => recipe.id !== action.id);
      break;
    case actionTypes.updateRecipe:
      newState = [...currentState].map((recipe) =>
        recipe.id === action.recipe.id ? { ...action.recipe } : { ...recipe }
      );
      break;

    case actionTypes.dragRecipe:
      const { source, destination } = action;
      newState = [...currentState];
      if (!destination) break;
      const aux = newState.filter(
        ({ days }) => destination.index === days[destination.droppableId]
      );
      break;
    default:
      newState = [...currentState];
      break;
  }

  return newState;
};

export default recipesReducer;
