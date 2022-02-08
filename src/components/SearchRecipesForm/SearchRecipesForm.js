import { useState } from "react";

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
      className="new-recipe"
      onSubmit={onFormSubmit}
      autoComplete="off"
      noValidate
    >
      <div className="form-group">
        <label htmlFor="ingredients">Ingredients: </label>
        <input
          type="text"
          id="ingredients"
          className="form-input"
          value={formData.ingredients}
          onChange={changeData}
        />
      </div>
      <div className="form-group">
        <input
          type="checkbox"
          id="no-sugar"
          checked={formData["no-sugar"]}
          onChange={changeData}
        />
        <label htmlFor="no-sugar">No-sugar</label>
      </div>
      <div className="form-group">
        <input
          type="checkbox"
          id="high-protein"
          checked={formData["high-protein"]}
          onChange={changeData}
        />
        <label htmlFor="high-protein">High-protein</label>
      </div>
      <div className="form-group">
        <input
          type="checkbox"
          id="balanced"
          checked={formData.balanced}
          onChange={changeData}
        />
        <label htmlFor="balanced">Balanced</label>
      </div>
      <div className="form-group">
        <input
          type="checkbox"
          id="low-sodium"
          checked={formData["low-sodium"]}
          onChange={changeData}
        />
        <label htmlFor="low-sodium">Low-sodium</label>
      </div>
      <div className="form-group">
        <input
          type="checkbox"
          id="vegan"
          checked={formData.vegan}
          onChange={changeData}
        />
        <label htmlFor="vegan">Vegan</label>
      </div>
      <div className="form-group">
        <input
          type="checkbox"
          id="vegetarian"
          checked={formData.vegetarian}
          onChange={changeData}
        />
        <label htmlFor="vegan">Vegetarian</label>
      </div>
      <button type="submit" disabled={!isFilled}>
        Search recipes
      </button>
    </form>
  );
};

export default SearchRecipesForm;
