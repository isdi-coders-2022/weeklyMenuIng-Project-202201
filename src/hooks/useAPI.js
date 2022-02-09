import { useCallback, useContext } from "react";
import {
  setIsLoaded,
  unsetIsLoaded,
  setError,
  unsetError,
} from "../store/actions/api/apiActionsCreator";
import {
  loadRecipesAction,
  createRecipeAction,
  removeRecipeAction,
  updateRecipeAction,
} from "../store/actions/recipes/recipesActionsCreator";
import ApiContext from "../store/contexts/ApiContext/ApiContext";
import RecipesContext from "../store/contexts/RecipesContext/RecipesContext";

const useAPI = () => {
  //const apiURL = process.env.REACT_APP_API_URL;
  const apiURL = "https://my-weekly-menu-api.herokuapp.com/myrecipes";
  const { dispatch } = useContext(RecipesContext);
  const { dispatch: dispatchAPI } = useContext(ApiContext);

  const loadRecipesAPI = useCallback(async () => {
    try {
      dispatchAPI(setIsLoaded());
      dispatchAPI(unsetError());
      const response = await fetch(apiURL);
      const recipes = await response.json();
      dispatch(loadRecipesAction(recipes));
    } catch (error) {
      dispatchAPI(setError());
    }
    dispatchAPI(unsetIsLoaded());
  }, [apiURL, dispatch, dispatchAPI]);

  const addRecipeAPI = async (recipe) => {
    try {
      dispatchAPI(setIsLoaded());
      dispatchAPI(unsetError());
      const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      });
      const newRecipe = await response.json();
      dispatch(createRecipeAction(newRecipe));
    } catch (error) {
      dispatchAPI(setError());
    }
    dispatchAPI(unsetIsLoaded());
  };

  const updateRecipeAPI = async (recipe) => {
    try {
      dispatchAPI(setIsLoaded());
      dispatchAPI(unsetError());
      const response = await fetch(apiURL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      });
      const updatedRecipe = await response.json();
      dispatch(updateRecipeAction(updatedRecipe));
    } catch (error) {
      dispatchAPI(setError());
    }
    dispatchAPI(unsetIsLoaded());
  };

  const deleteRecipeAPI = async (id) => {
    dispatchAPI(setIsLoaded());
    try {
      dispatchAPI(unsetError());
      const response = await fetch(`${apiURL}${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        dispatch(removeRecipeAction(id));
      } else {
        throw new Error();
      }
    } catch (error) {
      dispatchAPI(setError());
    }
    dispatchAPI(unsetIsLoaded());
  };

  return {
    loadRecipesAPI,
    addRecipeAPI,
    deleteRecipeAPI,
    updateRecipeAPI,
  };
};

export default useAPI;
