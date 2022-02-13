import React, { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import { v4 } from "uuid";
import { dragRecipeAction } from "../../store/actions/recipes/recipesActionsCreator";
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
  const { myRecipes, dispatch } = useContext(MyRecipesContext);
  const handleDragEnd = ({ source, destination }) =>
    dispatch(dragRecipeAction(source, destination));
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <WeekContainer>
        <Droppable droppableId="0">
          {(provided) => (
            <Day {...provided.droppableProps} ref={provided.innerRef}>
              {myRecipes.map((recipe) => {
                if (recipe.days[0].active) {
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
    </DragDropContext>
  );
};
export default Week;
