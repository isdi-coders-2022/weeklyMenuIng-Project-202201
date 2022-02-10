import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import useAPI from "../../hooks/useAPI";

const SearchRecipesForm = () => {
  const { loadRecipesAPI } = useAPI();

  const blankIngredientsField = {
    ingredients: "",
  };

  const [formData, setFormData] = useState(blankIngredientsField);

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
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

      <Checkbox
        text="no-sugar"
        className="diets-checkbox"
        checked={formData["no-sugar"]}
        onChange={changeData}
      />
      <Checkbox
        text="high-protein"
        className="diets-checkbox"
        checked={formData["high-protein"]}
        onChange={changeData}
      />
      <Checkbox
        text="balanced"
        className="diets-checkbox"
        checked={formData.balanced}
        onChange={changeData}
      />
      <Checkbox
        text="low-sodium"
        className="diets-checkbox"
        checked={formData["low-sodium"]}
        onChange={changeData}
      />
      <Checkbox
        text="vegan"
        className="diets-checkbox"
        checked={formData.vegan}
        onChange={changeData}
      />
      <Checkbox
        text="vegetarian"
        className="diets-checkbox"
        checked={formData.vegetarian}
        onChange={changeData}
      />
      <button type="submit" disabled={!isFilled}>
        Search recipes
      </button>
    </form>
  );
};

export default SearchRecipesForm;
