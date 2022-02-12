import useAPI from "../hooks/useAPI";
import { useEffect } from "react";
import RecipesList from "../components/RecipesList/RecipesList";
import { useNavigate } from "react-router-dom";

const MyMenuPage = () => {
  const { loadMyRecipesAPI } = useAPI();
  const navigate = useNavigate();

  const goToRecipePage = (api, id) => {
    navigate(`/recipe/view/${api}/${id}`);
  };

  useEffect(() => {
    loadMyRecipesAPI();
  }, [loadMyRecipesAPI]);

  return (
    <>
      <main className="main">
        <RecipesList
          myList={true}
          actionOnClick={(api, id) => {
            goToRecipePage(api, id);
          }}
        />
      </main>
    </>
  );
};
export default MyMenuPage;
