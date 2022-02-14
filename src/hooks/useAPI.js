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
  getRecipeAction,
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

const useAPI = () => {
  const { dispatch, setNextEndpoint, recipeDispatch } =
    useContext(RecipesContext);
  const { dispatch: dispatchMy } = useContext(MyRecipesContext);
  const { dispatch: dispatchAPI } = useContext(ApiContext);

  const loadRecipesAPI = useCallback(
    async (ingredientsQuery) => {
      const APIendpointURL = `${process.env.REACT_APP_EDAMAM_API_URL}?type=public&q=${ingredientsQuery}&app_id=${process.env.REACT_APP_EDAMAM_API_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`;
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
      const response = await fetch(process.env.REACT_APP_HEROKKU_API_URL);
      const recipes = await response.json();
      dispatchMy(loadMyRecipesAction(recipes));
    } catch (error) {
      dispatchAPI(setError(error));
    }
    dispatchAPI(unsetIsLoaded());
  }, [dispatchMy, dispatchAPI]);

  const getRecipeAPI = useCallback(
    async (id, api) => {
      const APIendpointURL =
        api === "edamam"
          ? `${process.env.REACT_APP_EDAMAM_API_URL}/${id}?type=public&app_id=${process.env.REACT_APP_EDAMAM_API_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`
          : `${process.env.REACT_APP_HEROKKU_API_URL}/${id}`;
      let response = {};
      try {
        dispatchAPI(setIsLoaded());
        dispatchAPI(unsetError());
        response = await fetch(APIendpointURL);
        const recipe = await response.json();
        recipeDispatch(getRecipeAction(recipe));
      } catch (error) {
        dispatchAPI(setError(error));
      }
      dispatchAPI(unsetIsLoaded());
    },
    [dispatchAPI, recipeDispatch]
  );

  const addRecipeToMyListAPI = async (recipe) => {
    const uri = recipe.recipe.uri;
    const newId = uri.slice(uri.lastIndexOf("_") + 1);
    const recipeWithId = {
      ...recipe,
      edamam: true,
      id: newId,
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

      const response = await fetch(process.env.REACT_APP_HEROKKU_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeWithId),
      });
      const newRecipe = await response.json();
      dispatchMy(createRecipeAction(newRecipe));
    } catch (error) {
      dispatchAPI(setError(error));
    }
    dispatchAPI(unsetIsLoaded());
  };

  const addRecipeAPI = async (recipe) => {
    const recipeWithDays = {
      ...recipe,
      edamam: false,
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

      const response = await fetch(process.env.REACT_APP_HEROKKU_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeWithDays),
      });
      const newRecipe = await response.json();
      dispatchMy(createRecipeAction(newRecipe));
    } catch (error) {
      dispatchAPI(setError(error));
    }
    dispatchAPI(unsetIsLoaded());
  };

  const updateRecipeAPI = async (id, recipeData) => {
    try {
      dispatchAPI(setIsLoaded());
      dispatchAPI(unsetError());
      const response = await fetch(
        `${process.env.REACT_APP_HEROKKU_API_URL}${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(recipeData),
        }
      );
      const updatedRecipe = await response.json();
      dispatchMy(updateRecipeAction(updatedRecipe));
    } catch (error) {
      dispatchAPI(setError(error));
    }
    dispatchAPI(unsetIsLoaded());
  };

  const deleteRecipeAPI = async (id) => {
    dispatchAPI(setIsLoaded());
    try {
      dispatchAPI(unsetError());
      const response = await fetch(
        `${process.env.REACT_APP_HEROKKU_API_URL}${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        dispatchMy(removeRecipeAction(id));
      } else {
        throw new Error();
      }
    } catch (error) {
      dispatchAPI(setError(error));
    }
    dispatchAPI(unsetIsLoaded());
  };

  return {
    loadRecipesAPI,
    loadMoreRecipesAPI,
    getRecipeAPI,
    loadMyRecipesAPI,
    addRecipeAPI,
    deleteRecipeAPI,
    updateRecipeAPI,
    addRecipeToMyListAPI,
  };
};

export default useAPI;
