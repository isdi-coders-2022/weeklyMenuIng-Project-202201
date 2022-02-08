import {
  setError,
  setIsLoaded,
  unsetError,
  unsetIsLoaded,
} from "./apiActionsCreator";
import { apiActionsTypes } from "./apiActionsTypes";

describe("Given an apiActionsCreator", () => {
  describe("When the setIsLoading function is called", () => {
    test("then it should return an object with type set is loading", () => {
      const setLoadingType = apiActionsTypes.setIsLoaded;
      const expectedAction = { type: setLoadingType };
      const action = setIsLoaded();
      expect(action).toEqual(expectedAction);
    });
  });

  describe("When the unsetIsLoading function is called", () => {
    test("then it should return an object with type unset is loading", () => {
      const unsetLoadingType = apiActionsTypes.unsetIsLoaded;
      const expectedAction = { type: unsetLoadingType };
      const action = unsetIsLoaded();
      expect(action).toEqual(expectedAction);
    });
  });

  describe("When the setError function is called", () => {
    test("then it should return an object with type set error", () => {
      const setErrorType = apiActionsTypes.setError;
      const expectedAction = { type: setErrorType };
      const action = setError();
      expect(action).toEqual(expectedAction);
    });
  });

  describe("When the unsetError function is called", () => {
    test("then it should return an object with type unset error", () => {
      const unsetErrorType = apiActionsTypes.unsetError;
      const expectedAction = { type: unsetErrorType };
      const action = unsetError();
      expect(action).toEqual(expectedAction);
    });
  });
});
