import React, { useContext } from "react";
import { useReducer } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import { v4 } from "uuid";
import { dragRecipeAction } from "../../store/actions/recipes/recipesActionsCreator";
import MyRecipesContext from "../../store/contexts/MyRecipesContext/MyRecipesContext";
import recipesReducer from "../../store/reducers/recipes/recipesReducer";
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
  margin: 1rem;
  background-color: aliceblue;
`;

const Week = () => {
  const { myRecipes: recipes, dispatch } = useContext(MyRecipesContext);

  const handleDragEnd = ({ source, destination }) =>
    dispatch(dragRecipeAction(source, destination));
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <WeekContainer>
        <Droppable droppableId="0">
          {(provided) => (
            <Day {...provided.droppableProps} ref={provided.innerRef}>
              {recipes.map((recipe) => {
                if (recipe.days[0]) {
                  return (
                    <Draggable
                      key={recipe.id}
                      draggableId={recipe.id}
                      index={recipe.days[0]}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                        >
                          <DayRecipe recipe={recipe} />
                        </div>
                      )}
                    </Draggable>
                  );
                }
                return "";
              })}
              {provided.placeholder}
            </Day>
          )}
        </Droppable>
        <Day>
          {recipes.map((recipe) => {
            if (recipe.days[0]) {
              return <DayRecipe recipe={recipe} key={v4()} />;
            }
            return "";
          })}
        </Day>
        <Day>
          {recipes.map((recipe) => {
            if (recipe.days[0]) {
              return <DayRecipe recipe={recipe} key={v4()} />;
            }
            return "";
          })}
        </Day>
        <Day>
          {recipes.map((recipe) => {
            if (recipe.days[0]) {
              return <DayRecipe recipe={recipe} key={v4()} />;
            }
            return "";
          })}
        </Day>
        <Day>
          {recipes.map((recipe) => {
            if (recipe.days[0]) {
              return <DayRecipe recipe={recipe} key={v4()} />;
            }
            return "";
          })}
        </Day>
        <Day>
          {recipes.map((recipe) => {
            if (recipe.days[0]) {
              return <DayRecipe recipe={recipe} key={v4()} />;
            }
            return "";
          })}
        </Day>
        <Day>
          {recipes.map((recipe) => {
            if (recipe.days[0]) {
              return <DayRecipe recipe={recipe} key={v4()} />;
            }
            return "";
          })}
        </Day>
      </WeekContainer>
    </DragDropContext>
  );
};
export default Week;
