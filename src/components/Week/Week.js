import styled from "styled-components";

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
  margin: 1rem;
  background-color: aliceblue;
`;

const Week = ({ recipes }) => {
  return (
    <WeekContainer>
      <Day></Day>
      <Day>
        <li></li>
      </Day>
      <Day>
        <li></li>
      </Day>
      <Day>
        <li></li>
      </Day>
      <Day>
        <li></li>
      </Day>
      <Day>
        <li></li>
      </Day>
      <Day>
        <li></li>
      </Day>
    </WeekContainer>
  );
};
export default Week;
