import {
  setError,
  setIsLoaded,
  unsetError,
  unsetIsLoaded,
} from "../../actions/api/apiActionsCreator";
import apiReducer from "./apiReducer";

describe("Given an apiReducer", () => {
  describe("When it receibes the current state and an action with type setIsLoaded", () => {
    test("Then it should return a new state with the propenty isLoaded setted to true", () => {
      const action = setIsLoaded();
      const currentState = {};
      const expectedIsLoadedValue = true;

      const newState = apiReducer(currentState, action);

      expect(newState.isLoaded).toBe(expectedIsLoadedValue);
    });
  });

  describe("When it receibes the current state and an action with type unsetIsloaded", () => {
    test("Then it should return a new state with the property isLoaded setted to false", () => {
      const action = unsetIsLoaded();
      const currentState = {};
      const expectedIsLoadedValue = false;

      const newState = apiReducer(currentState, action);

      expect(newState.isLoaded).toBe(expectedIsLoadedValue);
    });
  });

  describe("When it receibes the current state and an action with type setError", () => {
    test("Then it should return a new state with the property hasError setted to true", () => {
      const action = setError();
      const currentState = {};
      const expectedHasErrorValue = true;

      const newState = apiReducer(currentState, action);

      expect(newState.hasError).toBe(expectedHasErrorValue);
    });
  });

  describe("When it receibes the current state and an action with type unsetError", () => {
    test("Then it should return a new state with the property hasError setted to false", () => {
      const action = unsetError();
      const currentState = {};
      const expectedHasErrorValue = false;

      const newState = apiReducer(currentState, action);

      expect(newState.hasError).toBe(expectedHasErrorValue);
    });
  });
});
