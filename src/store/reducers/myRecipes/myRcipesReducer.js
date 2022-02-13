import { actionTypes } from "../../actions/myRecipes/myRecipesActionsTypes";

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
        if (recipe.id === id) {
          const days = [...recipe.days];
          days[day].active = !days[day].active;
          return { ...recipe, days };
        }
        return { ...recipe };
      });

      break;

    default:
      newState = [...currentState];
      break;
  }

  return newState;
};

export default myRecipesReducer;
