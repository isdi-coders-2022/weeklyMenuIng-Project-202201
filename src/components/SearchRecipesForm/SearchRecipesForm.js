import { useState } from "react";
import useAPI from "../../hooks/useAPI";

const SearchRecipesForm = () => {
  const { loadRecipesAPI } = useAPI();

  const blankIngredientsField = {
    ingredients: "",
  };

  const [formData, setFormData] = useState(blankIngredientsField);

  const changeData = (event) => {
    setFormData(
      event.target.type === "text"
        ? {
            ...formData,
            [event.target.id]: event.target.value,
          }
        : {
            ...formData,
            [event.target.id]: event.target.checked,
          }
    );
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (isFilled) {
      loadRecipesAPI(formData.ingredients);
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData(blankIngredientsField);
  };

  const isFilled = formData.ingredients !== "";

  return (
    <form
      className="search-recipes-form"
      onSubmit={onFormSubmit}
      autoComplete="off"
      noValidate
    >
      <div className="form-group">
        <label className="ingredients-label" htmlFor="ingredients">
          Ingredients:
        </label>
        <input
          type="text"
          id="ingredients"
          className="form-input-ingredients"
          value={formData.ingredients}
          placeholder="write some ingredients..."
          onChange={changeData}
        />
      </div>
      <button type="submit" disabled={!isFilled}>
        Search recipes
      </button>
    </form>
  );
};

export default SearchRecipesForm;
