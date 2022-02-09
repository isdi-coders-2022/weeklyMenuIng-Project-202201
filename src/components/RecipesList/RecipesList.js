import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import RecipesContext from "../../store/contexts/RecipesContext/RecipesContext";
import Recipe from "../Recipe/Recipe";
import useAPI from "../../hooks/useAPI";

const RecipesList = ({ myList = false }) => {
  const { recipes, myRecipes } = useContext(RecipesContext);
  const { addRecipeToMyListAPI } = useAPI();

  const recipeItems = myList ? myRecipes : recipes;

  return (
    <ul className="recipes">
      {recipeItems.map((recipe) => (
        <Recipe
          key={uuidv4()}
          recipe={recipe}
          actionOnClickAdd={() => addRecipeToMyListAPI(recipe)}
        />
      ))}
    </ul>
  );
};

export default RecipesList;
