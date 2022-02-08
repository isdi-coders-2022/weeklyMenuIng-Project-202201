import RecipesContext from "./RecipesContext";

const RecipesContextProvider = ({ children }) => {
  return <RecipesContext.Provider>{children}</RecipesContext.Provider>;
};

export default RecipesContextProvider;
