import styled from "styled-components";
import BurgerComponent from "../BurgerComponent/BurgerComponent";
import Infoblock from "../Infoblock/Infoblock";
import Links from "../Links/Links";
import logo from "./logo.svg";

const HeaderContainer = styled.header`
  display: flex;
  height: 100px;
  align-items: center;
  background-color: #b3dee2;
  justify-content: space-between;

  & ul {
    display: flex;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    list-style: none;
    margin: 0;

    & li a {
      text-decoration: none;
      color: #000;
    }
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
