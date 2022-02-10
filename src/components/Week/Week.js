import { prettyDOM } from "@testing-library/dom";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import { v4 } from "uuid";
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

const recipes = [
  {
    recipe: {
      label: "chicken",
      image:
        "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    },
    id: v4(),
    days: [1, null, null, null, null, null, null],
  },
  {
    recipe: {
      label: "chicken",
      image:
        "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    },
    id: v4(),
    days: [2, null, null, null, null, null, null],
  },
  {
    recipe: {
      label: "chicken",
      image:
        "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    },
    id: v4(),
    days: [3, null, null, null, null, null, null],
  },
  {
    recipe: {
      label: "chicken",
      image:
        "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    },
    id: v4(),
    days: [null, null, null, null, null, null, null],
  },
  {
    recipe: {
      label: "chicken",
      image:
        "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    },
    id: v4(),
    days: [null, null, null, null, null, null, null],
  },
  {
    recipe: {
      label: "chicken",
      image:
        "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    },
    id: v4(),
    days: [null, null, null, null, null, null, null],
  },
  {
    recipe: {
      label: "chicken",
      image:
        "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    },
    id: v4(),
    days: [null, null, null, null, null, null, null],
  },
  {
    recipe: {
      label: "chicken",
      image:
        "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    },
    id: v4(),
    days: [null, null, null, null, null, null, null],
  },
  {
    recipe: {
      label: "chicken",
      image:
        "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    },
    id: v4(),
    days: [null, null, null, null, null, null, null],
  },
  {
    recipe: {
      label: "chicken",
      image:
        "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    },
    id: v4(),
    days: [null, null, null, null, null, null, null],
  },
  {
    recipe: {
      label: "chicken",
      image:
        "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    },
    id: v4(),
    days: [null, null, null, null, null, null, null],
  },
  {
    recipe: {
      label: "chicken",
      image:
        "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    },
    id: v4(),
    days: [null, null, null, null, null, null, null],
  },
  {
    recipe: {
      label: "chicken",
      image:
        "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    },
    id: v4(),
    days: [null, null, null, null, null, null, null],
  },
  {
    recipe: {
      label: "chicken",
      image:
        "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    },
    id: v4(),
    days: [null, null, null, null, null, null, null],
  },
  {
    recipe: {
      label: "chicken",
      image:
        "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    },
    id: v4(),
    days: [null, null, null, null, null, null, null],
  },
  {
    recipe: {
      label: "chicken",
      image:
        "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    },
    id: v4(),
    days: [null, null, null, null, null, null, null],
  },
  {
    recipe: {
      label: "chicken",
      image:
        "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    },
    id: v4(),
    days: [null, null, null, null, null, null, null],
  },
  {
    recipe: {
      label: "chicken",
      image:
        "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    },
    id: v4(),
    days: [null, null, null, null, null, null, null],
  },
  {
    recipe: {
      label: "chicken",
      image:
        "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    },
    id: v4(),
    days: [null, null, null, null, null, null, null],
  },
  {
    recipe: {
      label: "chicken",
      image:
        "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    },
    id: v4(),
    days: [null, null, null, null, null, null, null],
  },
  {
    recipe: {
      label: "chicken",
      image:
        "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    },
    id: v4(),
    days: [null, null, null, null, null, null, null],
  },
];

const Week = () => {
  return (
    <DragDropContext>
      <WeekContainer>
        <Droppable droppableId="recipes">
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
      </WeekContainer>
    </DragDropContext>
  );
};
export default Week;
