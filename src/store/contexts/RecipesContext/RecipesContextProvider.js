import RecipesContext from "./RecipesContext";
import { useReducer, useState } from "react";
import recipesReducer from "../../reducers/recipes/recipesReducer";

const RecipesContextProvider = ({ children }) => {
  const [recipes, dispatch] = useReducer(recipesReducer, []);

  const [nextEndPoint, setNextEndpoint] = useState("");
  return (
    <RecipesContext.Provider
      value={{
        recipes,
        dispatch,
        nextEndPoint,
        setNextEndpoint,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
