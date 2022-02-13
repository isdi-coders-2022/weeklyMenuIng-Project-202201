import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipesContext from "../store/contexts/RecipesContext/RecipesContext";
import useAPI from "../hooks/useAPI";
import Recipe from "../components/Recipe/Recipe";

const RecipePage = () => {
  const { id, api } = useParams();
  const { recipe } = useContext(RecipesContext);
  const { getRecipeAPI } = useAPI();

  useEffect(() => {
    getRecipeAPI(id, api);
  }, [id, api, getRecipeAPI]);

  if (Object.keys(recipe).length === 0) {
    return null;
  }

  return (
    <>
      <main className="main">
        <Recipe className="test" recipe={recipe} api={api} />
      </main>
    </>
  );
};
export default RecipePage;
