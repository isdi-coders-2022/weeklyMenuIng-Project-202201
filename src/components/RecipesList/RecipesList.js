import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { useContext } from "react";
import RecipesContext from "../../store/contexts/RecipesContext/RecipesContext";
import useAPI from "../../hooks/useAPI";
import RecipeCard from "../RecipeCard/RecipeCard";
import Button from "../Button/Button";

const RecipesGrid = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 25px;
`;

const RecipesList = ({ myList = false }) => {
  const { recipes, myRecipes, nextEndPoint } = useContext(RecipesContext);
  const { addRecipeToMyListAPI, loadMoreRecipesAPI } = useAPI();
  const recipesObject = myList ? myRecipes : recipes;

  return (
    <>
      {recipes.length > 0 && (
        <p className="search-results-msg">{`Showing ${recipes.length} recipes`}</p>
      )}
      <RecipesGrid>
        {recipesObject.map((recipe) => (
          <RecipeCard
            key={uuidv4()}
            recipe={recipe}
            actionOnClickAdd={() => addRecipeToMyListAPI(recipe)}
          />
        ))}
      </RecipesGrid>
      {recipes.length > 0 && (
        <Button
          text="Load more"
          className="button"
          actionOnClick={() => {
            loadMoreRecipesAPI(nextEndPoint);
          }}
        />
      )}
    </>
  );
};

export default RecipesList;
