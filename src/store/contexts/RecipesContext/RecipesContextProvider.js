import RecipesContext from "./RecipesContext";
import { useReducer, useState } from "react";
import recipesReducer from "../../reducers/recipes/recipesReducer";
import recipeReducer from "../../reducers/recipes/recipeReducer";

const RecipesContextProvider = ({ children }) => {
  const [recipes, dispatch] = useReducer(recipesReducer, []);
  const [recipe, recipeDispatch] = useReducer(recipeReducer, {});

  const [nextEndPoint, setNextEndpoint] = useState("");
  return (
    <RecipesContext.Provider
      value={{
        recipes,
        dispatch,
        nextEndPoint,
        setNextEndpoint,
        recipe,
        recipeDispatch,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
