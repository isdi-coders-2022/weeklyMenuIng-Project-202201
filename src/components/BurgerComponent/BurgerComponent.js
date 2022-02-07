import styledComponents from "styled-components";

const BurgerComponent = () => {
  const BurgerContainer = styledComponents.div`
  display: flex;
  flex-direction: column;
  height: 30px;
  justify-content: space-between;
  width: min-content;
  `;
  const BurgerBar = styledComponents.span`
  width: 33px;
  height: 3px;
  background-color: #000;
  
  `;
  return (
    <BurgerContainer>
      <BurgerBar />
      <BurgerBar />
      <BurgerBar />
    </BurgerContainer>
  );
};

export default BurgerComponent;
