import RecipesContext from "./RecipesContext";

const RecipesContextProvider = ({ children }) => {
  const data = ["mockData"];
  return (
    <RecipesContext.Provider value={data}>{children}</RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
