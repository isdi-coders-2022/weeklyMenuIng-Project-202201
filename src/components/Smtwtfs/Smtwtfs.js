import styled from "styled-components";
import { useState } from "react";

const Smtwtfs = ({ actionOnClick }) => {
  const DayList = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap:
    flex-direction: row;
  `;
  const ListItems = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    &.active {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border-style: solid;
    }
  `;
  const dayList = [
    { id: "su", active: false, initial: "S" },
    { id: "mo", active: false, initial: "M" },
    { id: "tu", active: false, initial: "T" },
    { id: "we", active: false, initial: "W" },
    { id: "th", active: false, initial: "T" },
    { id: "fr", active: false, initial: "F" },
    { id: "sa", active: false, initial: "S" },
  ];

  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(isActive ? false : true);
  };
  return (
    <DayList>
      <ListItems
        className={`day-letter-active${isActive ? " active" : ""}`}
        onClick={() => {
          toggleActive();
        }}
      >
        {dayList[0].initial}
      </ListItems>
      <ListItems
        className={`day-letter-active${isActive ? "-active" : ""}`}
        onClick={() => {
          toggleActive();
        }}
      >
        M
      </ListItems>
      <ListItems
        className={`day-letter-active${isActive ? "-active" : ""}`}
        onClick={() => {
          toggleActive();
        }}
      >
        T
      </ListItems>
      <ListItems
        className={`day-letter-active${isActive ? "-active" : ""}`}
        onClick={() => {
          toggleActive();
        }}
      >
        W
      </ListItems>
      <ListItems
        className={`day-letter-active${isActive ? "-active" : ""}`}
        onClick={() => {
          toggleActive();
        }}
      >
        T
      </ListItems>
      <ListItems
        className={`day-letter-active${isActive ? "-active" : ""}`}
        onClick={() => {
          toggleActive();
        }}
      >
        F
      </ListItems>
      <ListItems
        className={`day-letter-active${isActive ? "-active" : ""}`}
        onClick={() => {
          toggleActive();
        }}
      >
        S
      </ListItems>
    </DayList>
  );
};

export default Smtwtfs;
