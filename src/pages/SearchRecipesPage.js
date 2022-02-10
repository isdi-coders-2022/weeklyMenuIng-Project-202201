import RecipesList from "../components/RecipesList/RecipesList";
import SearchRecipesForm from "../components/SearchRecipesForm/SearchRecipesForm";

const SearchRecipesPage = () => {
  return (
    <>
      <main className="main">
        <SearchRecipesForm />
        <RecipesList />
      </main>
    </>
  );
};
export default SearchRecipesPage;
