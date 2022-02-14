import styled from "styled-components";
import { useContext, useState } from "react";
import RecipesContext from "../../store/contexts/RecipesContext/RecipesContext";
import useAPI from "../../hooks/useAPI";
import RecipeCard from "../RecipeCard/RecipeCard";
import Button from "../Button/Button";
import MyRecipesContext from "../../store/contexts/MyRecipesContext/MyRecipesContext";
import Checkbox from "../Checkbox/Checkbox";

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

  const [filtersData, setFiltersData] = useState([]);
  const [filteredResults, setFilteredResults] = useState(recipesObject);
  const filters = Array.from(document.querySelectorAll("input[type=checkbox]"));
  const filterByReference = (recipes, activeFilters) => {
    let res = [];
    res = recipes.filter(({ recipe }) => {
      return !activeFilters.find((filter) => {
        return filter === recipe.dietLabels[0];
      });
    });
    if (res.length === 0) return recipesObject;
    else {
      return res;
    }
  };
  const changeData = (event) => {
    setFiltersData([
      ...filters
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.id),
    ]);
    setFilteredResults([...filterByReference(recipesObject, filtersData)]);
  };
  return (
    <>
      {!myList && filteredResults.length > 0 && (
        <p className="search-results-msg">{`Showing ${recipes.length} recipes`}</p>
      )}
      {!myList && (
        <div className="filters">
          <Checkbox
            text="no-sugar"
            className="diets-checkbox"
            checked={filtersData["no-sugar"]}
            onChange={changeData}
          />
          <Checkbox
            text="high-protein"
            className="diets-checkbox"
            checked={filtersData["high-protein"]}
            onChange={changeData}
          />
          <Checkbox
            text="balanced"
            className="diets-checkbox"
            checked={filtersData.balanced}
            onChange={changeData}
          />
          <Checkbox
            text="low-sodium"
            className="diets-checkbox"
            checked={filtersData["low-sodium"]}
            onChange={changeData}
          />
          <Checkbox
            text="vegan"
            className="diets-checkbox"
            checked={filtersData.vegan}
            onChange={changeData}
          />
          <Checkbox
            text="vegetarian"
            className="diets-checkbox"
            checked={filtersData.vegetarian}
            onChange={changeData}
          />
        </div>
      )}
      <RecipesGrid>
        {filteredResults.map((recipe) => {
          const uniqueKey = recipe.recipe.uri
            ? recipe.recipe.uri.slice(recipe.recipe.uri.lastIndexOf("_") + 1)
            : recipe.id;
          return (
            <RecipeCard
              key={uniqueKey}
              recipe={recipe}
              isMyList={myList}
              actionOnClick={actionOnClick}
              uid={uniqueKey}
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
