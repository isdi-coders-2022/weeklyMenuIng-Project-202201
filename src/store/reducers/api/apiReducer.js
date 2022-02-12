import { apiActionsTypes } from "../../actions/api/apiActionsTypes";

const apiReducer = (currentApiState, action) => {
  let newApiState;
  switch (action.type) {
    case apiActionsTypes.setIsLoaded:
      newApiState = { ...currentApiState, isLoaded: true };
      break;

    case apiActionsTypes.unsetIsLoaded:
      newApiState = { ...currentApiState, isLoaded: false };
      break;

    case apiActionsTypes.setError:
      newApiState = {
        ...currentApiState,
        hasError: true,
        errorMsg: action.errorMsg,
      };
      break;

    case apiActionsTypes.unsetError:
      newApiState = { ...currentApiState, hasError: false, errorMsg: "" };
      break;
    default:
      newApiState = { ...currentApiState };
  }
  return newApiState;
};

export default apiReducer;
