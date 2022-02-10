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
  return (
    <DayList>
      <li className="day-letter su">S</li>
      <li className="day-letter mo">M</li>
      <li className="day-letter tu">T</li>
      <li className="day-letter day-letter--active we">W</li>
      <li className="day-letter th">T</li>
      <li className="day-letter fr">F</li>
      <li className="day-letter sa">S</li>
    </DayList>
  );
};

export default Smtwtfs;
