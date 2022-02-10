import MyRecipesContext from "./MyRecipesContext";
import { useReducer } from "react";
import myRecipesReducer from "../../reducers/myRecipes/myRecipesReducer";

const MyRecipesContextProvider = ({ children }) => {
  const [myRecipes, dispatch] = useReducer(myRecipesReducer, []);
  return (
    <MyRecipesContext.Provider
      value={{
        myRecipes,
        dispatch,
      }}
    >
      {children}
    </MyRecipesContext.Provider>
  );
};
export default MyRecipesContextProvider;
