import { useState } from "react";
import styled from "styled-components";

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

const Smtwtfs = () => {
  const [weekDays, setWeekDays] = useState([
    { day: "sunday", active: false, initial: "S" },
    { day: "monday", active: false, initial: "M" },
    { day: "tuesday", active: false, initial: "T" },
    { day: "wednesday", active: false, initial: "W" },
    { day: "thursday", active: false, initial: "T" },
    { day: "friday", active: false, initial: "F" },
    { day: "saturday", active: false, initial: "S" },
  ]);
  const changeState = (day) => {
    const newState = [...weekDays];
    newState[day] = toggleActive(newState[day]);
    setWeekDays(newState);
  };
  const toggleActive = (day) => {
    return { ...day, active: !day.active };
  };
  return (
    <DayList>
      {weekDays.map((day, index) => {
        return (
          <li
            key={index}
            className={`day-letter ${day.active ? "day-letter--active" : ""}`}
            onClick={() => {
              changeState(index);
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
