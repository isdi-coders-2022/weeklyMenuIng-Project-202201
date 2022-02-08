import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  height: 100px;
  align-items: center;
  background-color: #b3dee2;
  justify-content: center;
  & p {
    padding: 0;
    margin: 0;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="My weekly menu logo" />
      <Links />
      <BurgerComponent />
    </HeaderContainer>
  );
};
export default Header;
