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
    font-size: 1.2rem;
    color: #151f28;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>My Weekly Menu</p>
    </FooterContainer>
  );
};
export default Footer;
