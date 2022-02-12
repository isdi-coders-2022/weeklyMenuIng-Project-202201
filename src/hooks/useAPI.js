import { useCallback, useContext } from "react";
import {
  setIsLoaded,
  unsetIsLoaded,
  setError,
  unsetError,
} from "../store/actions/api/apiActionsCreator";
import {
  loadRecipesAction,
  loadMoreRecipesAction,
} from "../store/actions/recipes/recipesActionsCreator";
import {
  loadRecipesAction as loadMyRecipesAction,
  createRecipeAction,
  removeRecipeAction,
  updateRecipeAction,
} from "../store/actions/myRecipes/myRecipesActionsCreator";
import ApiContext from "../store/contexts/ApiContext/ApiContext";
import RecipesContext from "../store/contexts/RecipesContext/RecipesContext";
import MyRecipesContext from "../store/contexts/MyRecipesContext/MyRecipesContext";
import { v4 as uuidv4 } from "uuid";

const useAPI = () => {
  const { dispatch, setNextEndpoint } = useContext(RecipesContext);
  const { dispatch: dispatchMy } = useContext(MyRecipesContext);
  const { dispatch: dispatchAPI } = useContext(ApiContext);

  const loadRecipesAPI = useCallback(
    async (ingredientsQuery) => {
      const APIendpointURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredientsQuery}&app_id=dc6d4a3e&app_key=5139a87e32f135390c522c62e6f7f946`;
      let response = {};
      try {
        dispatchAPI(setIsLoaded());
        dispatchAPI(unsetError());
        response = await fetch(APIendpointURL);
        const recipes = await response.json();
        if (recipes._links.next?.href) {
          setNextEndpoint(recipes._links.next.href);
        } else {
          setNextEndpoint(null);
        }
        dispatch(loadRecipesAction(recipes));
      } catch (error) {
        dispatchAPI(setError(error));
      }
      dispatchAPI(unsetIsLoaded());
    },
    [dispatch, dispatchAPI, setNextEndpoint]
  );

  const loadMoreRecipesAPI = useCallback(
    async (nextEndpoint) => {
      let response = {};
      try {
        dispatchAPI(setIsLoaded());
        dispatchAPI(unsetError());
        response = await fetch(nextEndpoint);
        const recipes = await response.json();
        if (recipes._links.next?.href) {
          setNextEndpoint(recipes._links.next.href);
        } else {
          setNextEndpoint(null);
        }
        dispatch(loadMoreRecipesAction(recipes));
      } catch (error) {
        dispatchAPI(setError(error));
      }
      dispatchAPI(unsetIsLoaded());
    },
    [dispatch, dispatchAPI, setNextEndpoint]
  );

  const loadMyRecipesAPI = useCallback(async () => {
    try {
      dispatchAPI(setIsLoaded());
      dispatchAPI(unsetError());
      const response = await fetch(
        "https://my-weekly-menu-api.herokuapp.com/myrecipes/"
      );
      const recipes = await response.json();
      dispatchMy(loadMyRecipesAction(recipes));
    } catch (error) {
      dispatchAPI(setError());
    }
    dispatchAPI(unsetIsLoaded());
  }, [dispatchMy, dispatchAPI]);

  const addRecipeToMyListAPI = async (recipe) => {
    const recipeWithId = {
      ...recipe,
      id: uuidv4(),
      days: [
        { index: null, day: "sunday", active: false, initial: "S" },
        { index: null, day: "monday", active: false, initial: "M" },
        { index: null, day: "tuesday", active: false, initial: "T" },
        { index: null, day: "wednesday", active: false, initial: "W" },
        { index: null, day: "thursday", active: false, initial: "T" },
        { index: null, day: "friday", active: false, initial: "F" },
        { index: null, day: "saturday", active: false, initial: "S" },
      ],
    };
    try {
      dispatchAPI(setIsLoaded());
      dispatchAPI(unsetError());

      const response = await fetch(
        "https://my-weekly-menu-api.herokuapp.com/myrecipes/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(recipeWithId),
        }
      );
      const newRecipe = await response.json();
      dispatchMy(createRecipeAction(newRecipe));
    } catch (error) {
      dispatchAPI(setError());
    }
    dispatchAPI(unsetIsLoaded());
  };

  const addRecipeAPI = async (recipe) => {
    try {
      dispatchAPI(setIsLoaded());
      dispatchAPI(unsetError());

      const response = await fetch(
        "https://my-weekly-menu-api.herokuapp.com/myrecipes/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(recipe),
        }
      );
      const newRecipe = await response.json();
      dispatchMy(createRecipeAction(newRecipe));
    } catch (error) {
      dispatchAPI(setError());
    }
    dispatchAPI(unsetIsLoaded());
  };

  const updateRecipeAPI = async (recipe) => {
    try {
      dispatchAPI(setIsLoaded());
      dispatchAPI(unsetError());
      const response = await fetch(
        `https://my-weekly-menu-api.herokuapp.com/myrecipes/${recipe.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(recipe),
        }
      );
      const updatedRecipe = await response.json();
      dispatchMy(updateRecipeAction(updatedRecipe));
    } catch (error) {
      dispatchAPI(setError());
    }
    dispatchAPI(unsetIsLoaded());
  };

  const deleteRecipeAPI = async (id) => {
    dispatchAPI(setIsLoaded());
    try {
      dispatchAPI(unsetError());
      const response = await fetch(
        `https://my-weekly-menu-api.herokuapp.com/myrecipes/${id}`,
        {
          method: "DELETE",
        }
      );
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
    loadMoreRecipesAPI,
    loadMyRecipesAPI,
    addRecipeAPI,
    deleteRecipeAPI,
    updateRecipeAPI,
    addRecipeToMyListAPI,
  };
};

export default useAPI;
