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
      <main className="main">
        <RecipesList myList={true} />
      </main>
    </>
  );
};
export default MyMenuPage;
