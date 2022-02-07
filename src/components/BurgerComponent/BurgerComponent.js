import styled from "styled-components";

const burgerHeight = 33;

const BurgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: ${burgerHeight}px;
  width: min-content;
  justify-content: space-between;
  &:hover .burger-bar:nth-child(2),
  &.active .burger-bar:nth-child(2) {
    opacity: 0;
  }
  &:hover .burger-bar:nth-child(1),
  &.active .burger-bar:nth-child(1) {
    transform: rotate(45deg) translate(7.5px, ${burgerHeight / 2 - 4.5}px);
  }
  &:hover .burger-bar:nth-child(3),
  &.active .burger-bar:nth-child(3) {
    transform: rotate(-45deg) translate(7.5px, -${burgerHeight / 2 - 4.5}px);
  }
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
