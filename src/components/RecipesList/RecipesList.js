import styled from "styled-components";
import { useContext } from "react";
import RecipesContext from "../../store/contexts/RecipesContext/RecipesContext";
import useAPI from "../../hooks/useAPI";
import RecipeCard from "../RecipeCard/RecipeCard";
import Button from "../Button/Button";
import MyRecipesContext from "../../store/contexts/MyRecipesContext/MyRecipesContext";

const RecipesGrid = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 25px;
`;

const RecipesList = ({ myList = false, actionOnClick }) => {
  const { recipes, nextEndPoint } = useContext(RecipesContext);
  const { myRecipes } = useContext(MyRecipesContext);
  const { loadMoreRecipesAPI } = useAPI();
  const recipesObject = myList ? myRecipes : recipes;

  return (
    <>
      {!myList && recipes.length > 0 && (
        <p className="search-results-msg">{`Showing ${recipes.length} recipes`}</p>
      )}
      <RecipesGrid>
        {recipesObject.map((recipe) => {
          const uniqueKey = recipe.recipe.uri
            ? recipe.recipe.uri.slice(recipe.recipe.uri.lastIndexOf("_") + 1)
            : recipe.id;
          return (
            <RecipeCard
              key={uniqueKey}
              recipe={recipe}
              isMyList={myList}
              actionOnClick={actionOnClick}
            />
          );
        })}
      </RecipesGrid>
      {!myList && nextEndPoint && (
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
