import Recipe from "./../components/Recipe/Recipe";

const edamamJSON = require("./../edamamResponse.json");
const edamamReceipes = edamamJSON.hits;
const edamamRecipe = edamamReceipes[3];

const RecipePage = () => {
  return (
    <>
      <main className="main">
        <h1>Recipe Page</h1>
        <Recipe
          className={"recipe-view"}
          recipe={edamamRecipe}
        />
      </main>
    </>
  );
};
export default RecipePage;
