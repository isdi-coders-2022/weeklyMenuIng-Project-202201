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
  createRecipeAction,
  removeRecipeAction,
  updateRecipeAction,
} from "../store/actions/recipes/recipesActionsCreator";
import ApiContext from "../store/contexts/ApiContext/ApiContext";
import RecipesContext from "../store/contexts/RecipesContext/RecipesContext";
import { v4 as uuidv4 } from "uuid";

// TODO: PONER VARIABLES PARA CONSTRIUR URL Y PONER APIKEY Y API-ID EN .ENV
//const apiURL = process.env.REACT_APP_API_URL;

const useAPI = () => {
  const apiURL =
    "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=dc6d4a3e&app_key=5139a87e32f135390c522c62e6f7f946";
  const { dispatch, setNextEndpoint } = useContext(RecipesContext);
  const { dispatch: dispatchAPI } = useContext(ApiContext);

  const loadRecipesAPI = useCallback(
    async (ingredientsQuery) => {
      const APIendpointURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredientsQuery}&app_id=dc6d4a3e&app_key=5139a87e32f135390c522c62e6f7f946`;
      try {
        dispatchAPI(setIsLoaded());
        dispatchAPI(unsetError());
        const response = await fetch(APIendpointURL);
        const recipes = await response.json();
        if (recipes._links.next.href) {
          setNextEndpoint(recipes._links.next.href);
        }
        dispatch(loadRecipesAction(recipes));
      } catch (error) {
        dispatchAPI(setError());
      }
      dispatchAPI(unsetIsLoaded());
    },
    [dispatch, dispatchAPI, setNextEndpoint]
  );

  const loadMoreRecipesAPI = useCallback(
    async (nextEndpoint) => {
      try {
        dispatchAPI(setIsLoaded());
        dispatchAPI(unsetError());
        const response = await fetch(nextEndpoint);
        const recipes = await response.json();
        if (recipes._links.next.href) {
          setNextEndpoint(recipes._links.next.href);
        }
        dispatch(loadMoreRecipesAction(recipes));
      } catch (error) {
        dispatchAPI(setError());
      }
      dispatchAPI(unsetIsLoaded());
    },
    [dispatch, dispatchAPI, setNextEndpoint]
  );

  const loadMyRecipesAPI = useCallback(async () => {
    try {
      dispatchAPI(setIsLoaded());
      dispatchAPI(unsetError());
      const response = await fetch(apiURL);
      const recipes = await response.json();
      // TODO: hacer un load específico para cada API!
      dispatch(loadRecipesAction(recipes));
    } catch (error) {
      dispatchAPI(setError());
    }
    dispatchAPI(unsetIsLoaded());
  }, [apiURL, dispatch, dispatchAPI]);

  const addRecipeToMyListAPI = async (recipe) => {
    const recipeWithId = {
      ...recipe,
      id: uuidv4(),
      days: [{}, {}, {}, {}, {}, {}, {}],
    };
    try {
      dispatchAPI(setIsLoaded());
      dispatchAPI(unsetError());

      // TODO: hacer bien esto con la apiURL...!Ahora a chapa!

      // const response = await fetch(apiURL, {

      const response = await fetch(
        "https://my-weekly-menu-api.herokuapp.com/myrecipes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(recipeWithId),
        }
      );
      const newRecipe = await response.json();
      dispatch(createRecipeAction(newRecipe));
    } catch (error) {
      dispatchAPI(setError());
    }
    dispatchAPI(unsetIsLoaded());
  };

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
    loadMoreRecipesAPI,
    loadMyRecipesAPI,
    addRecipeAPI,
    deleteRecipeAPI,
    updateRecipeAPI,
    addRecipeToMyListAPI,
  };
};

export default useAPI;
