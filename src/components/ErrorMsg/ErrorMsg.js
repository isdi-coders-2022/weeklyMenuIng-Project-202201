import { useContext } from "react";
import ApiContext from "../../store/contexts/ApiContext/ApiContext";
import styled from "styled-components";

const ErrorMsgContainer = styled.div`
  height: 100px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: #ffffff;
  }
`;

const ErrorMsg = () => {
  const {
    apiState: { hasError, errorMsg },
  } = useContext(ApiContext);
  return (
    <>
      {hasError && (
        <ErrorMsgContainer>
          <p>{`Error fetching data: ${errorMsg}`}</p>
        </ErrorMsgContainer>
      )}
    </>
  );
};

export default ErrorMsg;
