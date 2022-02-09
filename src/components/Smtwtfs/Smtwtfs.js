import styled from "styled-components";

const Smtwtfs = () => {
  const DayList = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap:
    flex-direction: row;
  `;

  return (
    <DayList>
      <li className="day-letter-active su">S</li>
      <li className="day-letter mo">M</li>
      <li className="day-letter tu">T</li>
      <li className="day-letter we">W</li>
      <li className="day-letter th">T</li>
      <li className="day-letter fr">F</li>
      <li className="day-letter sa">S</li>
    </DayList>
  );
};

export default Smtwtfs;
