import React, { useContext } from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import MyRecipesContext from "../../store/contexts/MyRecipesContext/MyRecipesContext";
import DayRecipe from "../DayRecipe/DayRecipe";

const WeekContainer = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Day = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  margin: 0;
  background-color: aliceblue;
`;

const Week = () => {
  const { myRecipes } = useContext(MyRecipesContext);
  return (
    <WeekContainer>
      <Day>
        {myRecipes.map((recipe) => {
          if (recipe.days[0].active) {
            return (
              <div>
                <DayRecipe recipe={recipe} />
              </div>
            );
          }
          return null;
        })}
      </Day>
      =
      <Day>
        {myRecipes.map((recipe) => {
          if (recipe.days[1].active) {
            return <DayRecipe recipe={recipe} key={v4()} />;
          }
          return "";
        })}
      </Day>
      <Day>
        {myRecipes.map((recipe) => {
          if (recipe.days[2].active) {
            return <DayRecipe recipe={recipe} key={v4()} />;
          }
          return "";
        })}
      </Day>
      <Day>
        {myRecipes.map((recipe) => {
          if (recipe.days[3].active) {
            return <DayRecipe recipe={recipe} key={v4()} />;
          }
          return "";
        })}
      </Day>
      <Day>
        {myRecipes.map((recipe) => {
          if (recipe.days[4].active) {
            return <DayRecipe recipe={recipe} key={v4()} />;
          }
          return "";
        })}
      </Day>
      <Day>
        {myRecipes.map((recipe) => {
          if (recipe.days[5].active) {
            return <DayRecipe recipe={recipe} key={v4()} />;
          }
          return "";
        })}
      </Day>
      <Day>
        {myRecipes.map((recipe) => {
          if (recipe.days[6].active) {
            return <DayRecipe recipe={recipe} key={v4()} />;
          }
          return "";
        })}
      </Day>
    </WeekContainer>
  );
};
export default Week;
