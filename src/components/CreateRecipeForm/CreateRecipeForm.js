import { useState } from "react";
import useAPI from "../../hooks/useAPI";

const CreateRecipeForm = () => {
  const { addRecipeAPI } = useAPI();

  const initialFormData = Object.freeze({
    label: "",
    image: "",
    yield: "",
    dietLabels: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trim spaces
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipeAPI({
      recipe: {
        label: formData.label,
        image: formData.image,
        yield: formData.yield,
        dietLabels: [formData.dietLabels],
      },
    });
  };

  return (
    <>
      <form className="form-recipe">
        <div className="form-block">
          <label htmlFor="name">Recipe name: </label>
          <input type="text" name="label" id="label" onChange={handleChange} />
        </div>
        <div className="form-block">
          <label htmlFor="image">Image URL: </label>
          <input type="url" name="image" id="image" onChange={handleChange} />
        </div>
        <div className="form-block">
          <label htmlFor="image">Number of servings: </label>
          <input
            type="number"
            name="yield"
            id="yield"
            onChange={handleChange}
          />
        </div>
        <div className="form-block">
          <label htmlFor="image">Diet labels: </label>
          <input
            type="text"
            name="dietLabels"
            id="dietLabels"
            onChange={handleChange}
          />
        </div>
        <div className="form-block">
          <button type="submit" className="button" onClick={handleSubmit}>
            Add recipe to my list
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateRecipeForm;
