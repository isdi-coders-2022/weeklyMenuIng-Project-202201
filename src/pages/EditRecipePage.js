import CreateRecipeForm from "../components/CreateRecipeForm/CreateRecipeForm";
import Infoblock from "../components/Infoblock/Infoblock";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipesContext from "../store/contexts/RecipesContext/RecipesContext";
import useAPI from "../hooks/useAPI";

const EditRecipePage = () => {
  const { id } = useParams();
  const { recipe } = useContext(RecipesContext);
  const { getRecipeAPI } = useAPI();

  useEffect(() => {
    getRecipeAPI(id);
  }, [id, getRecipeAPI]);

  if (Object.keys(recipe).length === 0) {
    return null;
  }
  return (
    <>
      <main className="main">
        <Infoblock text="Update recipe" />
        <CreateRecipeForm data={recipe} />
      </main>
    </>
  );
};
export default EditRecipePage;
