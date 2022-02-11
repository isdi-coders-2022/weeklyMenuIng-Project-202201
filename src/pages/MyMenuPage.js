import useAPI from "../hooks/useAPI";
import { useEffect } from "react";
import RecipesList from "../components/RecipesList/RecipesList";

const MyMenuPage = () => {
  const { loadMyRecipesAPI } = useAPI();

  useEffect(() => {
    loadMyRecipesAPI();
  }, [loadMyRecipesAPI]);

  return (
    <>
      <RecipesList myList={true} />
    </>
  );
};
export default MyMenuPage;
