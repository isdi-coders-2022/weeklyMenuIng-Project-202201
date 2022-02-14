import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RecipesContext from "../store/contexts/RecipesContext/RecipesContext";
import useAPI from "../hooks/useAPI";
import Recipe from "../components/Recipe/Recipe";

const RecipePage = () => {
  const { id, api } = useParams();
  const { recipe } = useContext(RecipesContext);
  const { getRecipeAPI, deleteRecipeAPI, addRecipeToMyListAPI } = useAPI();
  const navigate = useNavigate();

  useEffect(() => {
    getRecipeAPI(id, api);
  }, [id, api, getRecipeAPI]);

  const goToEditPage = (id) => {
    navigate(`/recipe/edit/${id}`);
  };

  if (Object.keys(recipe).length === 0) {
    return null;
  }

  return (
    <>
      <main className="main">
        <Recipe
          className="recipe-detail"
          recipe={recipe}
          api={api}
          actionOnClickAdd={(recipe) => {
            addRecipeToMyListAPI(recipe);
          }}
          actionOnClickEdit={(id) => {
            goToEditPage(id);
          }}
          actionOnClickRemove={(id) => {
            deleteRecipeAPI(id);
          }}
        />
      </main>
    </>
  );
};
export default RecipePage;
