import { useContext } from "react";
import RecipesContext from "../../store/contexts/RecipesContext/RecipesContext";
import Recipe from "../Recipe/Recipe";

const RecipesList = () => {
  const { recipes } = useContext(RecipesContext);

  return (
    <ul className="recipes">
      {recipes.map((recipe) => (
        <Recipe
          key={Date.now()}
          recipe={recipe}
          actionOnClickAddToMyList={() => null}
        />
      ))}
    </ul>
  );
};

export default RecipesList;
