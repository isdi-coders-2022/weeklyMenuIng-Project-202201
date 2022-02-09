import styled from "styled-components";
import Links from "../Links/Links";

const Menu = styled.div`
  position: absolute;
  top: 100px;
  left: 10px;
  right: 10px;
  height: 350px;
  width: 330px;
  margin: 0 auto;
  background: rgba(183, 56, 227, 0.55);
  backdrop-filter: blur(5px);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  z-index: 100;
  & ul {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    & li a {
      text-decoration: none;
      color: #000;
      text-align: center;
      padding: 15px 40px;
    }
  }

  @media (min-width: 530px) {
    display: none;
  }
`;

const FloatingMenu = ({ isActive }) => {
  return isActive ? (
    <Menu>
      <Links />
    </Menu>
  ) : (
    ""
  );
};

export default FloatingMenu;
