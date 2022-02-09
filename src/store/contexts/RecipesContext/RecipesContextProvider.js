import RecipesContext from "./RecipesContext";
import { useReducer } from "react";
import recipesReducer from "../../reducers/recipes/recipesReducer";

const RecipesContextProvider = ({ children }) => {
  const [recipes, dispatch] = useReducer(recipesReducer, []);
  return (
    <RecipesContext.Provider
      value={{
        recipes,
        dispatch,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
