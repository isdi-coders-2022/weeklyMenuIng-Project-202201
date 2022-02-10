import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { useContext } from "react";
import RecipesContext from "../../store/contexts/RecipesContext/RecipesContext";
import useAPI from "../../hooks/useAPI";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipesGrid = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 25px;
`;

const RecipesList = ({ myList = false }) => {
  const { recipes, myRecipes } = useContext(RecipesContext);
  const { addRecipeToMyListAPI } = useAPI();

  const recipeItems = myList ? myRecipes : recipes;

  return (
    <RecipesGrid>
      {recipeItems.map((recipe) => (
        <RecipeCard
          key={uuidv4()}
          recipe={recipe}
          actionOnClickAdd={() => addRecipeToMyListAPI(recipe)}
        />
      ))}
    </RecipesGrid>
  );
};

export default RecipesList;
