import { useReducer } from "react";
import styled from "styled-components";
import { toggleDay } from "../../store/actions/myRecipes/myRecipesActionsCreator";
import myRecipesReducer from "../../store/reducers/myRecipes/myRcipesReducer";

const DayList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

const Smtwtfs = ({ smtwtfs, recipe }) => {
  const [, dispatch] = useReducer(myRecipesReducer);
  return (
    <DayList>
      {smtwtfs.map((day, index) => {
        return (
          <li
            key={`${recipe.label}${index}`}
            className={`day-letter ${day.active ? "day-letter--active" : ""}`}
            onClick={() => {
              dispatch(toggleDay(recipe, index));
            }}
          >
            {day.initial}
          </li>
        );
      })}
    </DayList>
  );
};

export default Smtwtfs;
