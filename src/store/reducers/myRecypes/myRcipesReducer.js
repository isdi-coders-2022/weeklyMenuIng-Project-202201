import { actionTypes } from "../../actions/myRecpes/myRecipesActionsTypes";

const myRecipesReducer = (currentState, action) => {
  let newState;

  switch (action.type) {
    case actionTypes.createRecipe:
      newState = action.recipe
        ? [...currentState, { ...action.recipe }]
        : [...currentState];
      break;
    case actionTypes.loadRecipes:
      newState = action.recipes ? [...action.recipes] : [...currentState];
      break;
    case actionTypes.removeRecipe:
      newState = [...currentState].filter((recipe) => recipe.id !== action.id);
      break;
    case actionTypes.updateRecipe:
      newState = [...currentState].map((recipe) =>
        recipe.id === action.recipe.id ? { ...action.recipe } : { ...recipe }
      );
      break;
    case actionTypes.toggleDay:
      const { id, day } = action;
      newState = [...currentState].map((recipe) => {
        return (recipe.days[day] =
          recipe.id === id
            ? { ...recipe.days[day], active: !day.active }
            : { ...recipe.days[day] });
      });

      break;

    default:
      newState = [...currentState];
      break;
  }

  return newState;
};

export default myRecipesReducer;
