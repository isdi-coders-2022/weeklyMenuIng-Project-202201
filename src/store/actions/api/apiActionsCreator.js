import { apiActionsTypes } from "./apiActionsTypes";

export const setIsLoaded = () => ({
  type: apiActionsTypes.setIsLoaded,
});

export const unsetIsLoaded = () => ({
  type: apiActionsTypes.unsetIsLoaded,
});

export const setError = (errorMsg) => ({
  type: apiActionsTypes.setError,
  errorMsg,
});

export const unsetError = () => ({
  type: apiActionsTypes.unsetError,
});
