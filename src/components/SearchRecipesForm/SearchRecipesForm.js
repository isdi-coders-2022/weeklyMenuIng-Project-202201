import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";

const SearchRecipesForm = () => {
  const blankFields = {
    ingredients: "",
    "no-sugar": false,
    "high-protein": false,
    balanced: false,
    "low-sodium": false,
    vegan: false,
    vegetarian: false,
  };

  const [formData, setFormData] = useState(blankFields);

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const filterResults = (data) => data;

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (isFilled) {
      filterResults(formData);
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData(blankFields);
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
