import styled from "styled-components";

const burgerHeight = 33;

const BurgerContainer = styled.div`
  display: flex;
  margin: 10px;
  flex-direction: column;
  height: ${burgerHeight}px;
  width: min-content;
  justify-content: space-between;

  &.active .burger-bar:nth-child(2) {
    opacity: 0;
  }

  &.active .burger-bar:nth-child(1) {
    transform: rotate(45deg) translate(7.5px, ${burgerHeight / 2 - 4.5}px);
  }

  &.active .burger-bar:nth-child(3) {
    transform: rotate(-45deg) translate(7.5px, -${burgerHeight / 2 - 4.5}px);
  }

  @media (min-width: 530px) {
    display: none;
  } ;
`;

const BurgerBar = styled.span`
  position: relative;
  width: 35px;
  background-color: #0f0f0f;
  height: 5px;
  border-radius: 5px;
  transition: all 0.2s;
`;

const BurgerComponent = ({ isActive, actionOnClick }) => {
  return (
    <BurgerContainer
      title="Navigation Menu"
      onClick={actionOnClick}
      className={`burger-container${isActive ? " active" : ""}`}
    >
      <BurgerBar className="burger-bar" />
      <BurgerBar className="burger-bar" />
      <BurgerBar className="burger-bar" />
    </BurgerContainer>
  );
};

export default BurgerComponent;
