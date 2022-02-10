import MyRecipesContext from "./MyRecipesContext";
import { useReducer } from "react";
import MyRecipesReducer from "../../reducers/myRecypes/myRcipesReducer";

const MyRecipesContextProvider = ({ children }) => {
  const [myRecipes, dispatch] = useReducer(MyRecipesReducer, []);
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
