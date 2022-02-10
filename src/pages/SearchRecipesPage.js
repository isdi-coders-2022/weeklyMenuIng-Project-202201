import useAPI from "../hooks/useAPI";
import { useEffect } from "react";
import RecipesList from "../components/RecipesList/RecipesList";
import SearchRecipesForm from "../components/SearchRecipesForm/SearchRecipesForm";

const SearchRecipesPage = () => {
  const { loadRecipesAPI } = useAPI();

  useEffect(() => {
    loadRecipesAPI();
  }, [loadRecipesAPI]);

  return (
    <>
      <SearchRecipesForm />
      <RecipesList />
    </>
  );
};
export default SearchRecipesPage;
