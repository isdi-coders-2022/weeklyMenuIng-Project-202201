import { apiActionsTypes } from "./apiActionsTypes";

export const setIsLoaded = () => ({
  type: apiActionsTypes.setIsLoaded,
});

export const unsetIsLoaded = () => ({
  type: apiActionsTypes.unsetIsLoaded,
});

export const setError = () => ({
  type: apiActionsTypes.setError,
});

export const setError = () => ({
  type: apiActionsTypes.unsetError,
});
