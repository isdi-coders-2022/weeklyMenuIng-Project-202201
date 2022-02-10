import MyRecipesContext from "./MyRecipesContext";

const MyRecipesContextProvider = ({ children }) => {
  return <MyRecipesContext.Provider>{children}</MyRecipesContext.Provider>;
};
export default MyRecipesContextProvider;
