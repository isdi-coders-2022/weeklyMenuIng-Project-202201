import { useContext } from "react";
import ApiContext from "../../store/contexts/ApiContext/ApiContext";
import styled from "styled-components";

const LoadingSplashContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #e27396;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.h1`
  color: #ffffff;
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  padding: 30px;
`;

const Loading = () => {
  const {
    apiState: { isLoaded },
  } = useContext(ApiContext);

  return (
    <>
      {isLoaded && (
        <LoadingSplashContainer>
          <LoadingText>
            Loading Recipes... (sustituir por spinner too guapo, eh...)
          </LoadingText>
        </LoadingSplashContainer>
      )}
    </>
  );
};

export default Loading;
