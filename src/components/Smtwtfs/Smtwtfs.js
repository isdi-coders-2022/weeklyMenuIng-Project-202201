import styled from "styled-components";

const Smtwtfs = () => {
  const DayList = styled.ul`
    width: 70%;
    list-style: none;
    display: flex;
    justify-content: space-around;
  `;
  return (
    <DayList>
      <li className="Su">S</li>
      <li className="Mo">M</li>
      <li className="Tu">T</li>
      <li className="We">W</li>
      <li className="Th">T</li>
      <li className="Fr">F</li>
      <li className="Sa">S</li>
    </DayList>
  );
};

export default Smtwtfs;
