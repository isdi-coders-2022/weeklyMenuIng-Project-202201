import RecipesContext from "./RecipesContext";
import { useReducer } from "react";
import recipesReducer from "../../reducers/recipes/recipesReducer";

const RecipesContextProvider = ({ children }) => {
  const [recipes, dispatch] = useReducer(recipesReducer, []);
  const [myRecipes, dispatchMyRecipes] = useReducer(recipesReducer, []);
  return (
    <RecipesContext.Provider
      value={{
        recipes,
        dispatch,
        myRecipes,
        dispatchMyRecipes,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
