import useAPI from "../hooks/useAPI";
import { useEffect } from "react";
import RecipesList from "../components/RecipesList/RecipesList";

const MyMenuPage = () => {
  const { loadRecipesAPI } = useAPI();

  useEffect(() => {
    loadRecipesAPI();
  }, [loadRecipesAPI]);

  return (
    <>
      <RecipesList />
    </>
  );
};
export default MyMenuPage;
