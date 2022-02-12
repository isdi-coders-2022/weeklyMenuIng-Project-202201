import { useNavigate } from "react-router-dom";
import RecipesList from "../components/RecipesList/RecipesList";
import SearchRecipesForm from "../components/SearchRecipesForm/SearchRecipesForm";

const SearchRecipesPage = () => {
  const navigate = useNavigate();
  const goToRecipePage = (api, id) => {
    navigate(`/recipe/view/${api}/${id}`);
  };
  return (
    <>
      <main className="main">
        <SearchRecipesForm />
        <RecipesList
          myList={false}
          actionOnClick={(api, id) => {
            goToRecipePage(api, id);
          }}
        />
      </main>
    </>
  );
};
export default SearchRecipesPage;
