import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import RecipesContext from "../../store/contexts/RecipesContext/RecipesContext";
import Recipe from "../Recipe/Recipe";
import useAPI from "../../hooks/useAPI";

const RecipesList = () => {
  const { recipes } = useContext(RecipesContext);
  const { addRecipeToMyListAPI } = useAPI();

  return (
    <ul className="recipes">
      {recipes.map((recipe) => (
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
