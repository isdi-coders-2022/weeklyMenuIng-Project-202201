import styled from "styled-components";
import BurgerComponent from "../BurgerComponent/BurgerComponent";
import Links from "../Links/Links";
import logo from "./logo.svg";

const HeaderContainer = styled.header`
  display: flex;
  height: 100px;
  align-items: center;
  background-color: #b3dee2;
  justify-content: space-around;

  & ul {
    display: flex;
    width: 100%;
    margin: 100px 0 10px 0;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    list-style: none;
    margin: 0 10px;

    & li a {
      text-decoration: none;
      color: #000;
      margin: 0 8px;
    }
    @media (max-width: 530px) {
      display: none;
    }
  }

  @media (max-width: 650px) {
    font-size: 14px;
  }
  @media (max-width: 590px) {
    font-size: 13px;
  }
  @media (max-width: 560px) {
    font-size: 12px;
  }
`;

const Logo = styled.img`
  height: inherit;
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
