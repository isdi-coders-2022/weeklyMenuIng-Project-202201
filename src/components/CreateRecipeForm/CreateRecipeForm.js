import { useState } from "react";
import useAPI from "../../hooks/useAPI";

const CreateRecipeForm = () => {
  const { addRecipeAPI } = useAPI();

  const initialFormData = Object.freeze({
    label: "",
    image: "https://desenio.es/bilder/artiklar/zoom/8684_2.jpg?imgwidth=435",
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
        dietLabels: [...formData.dietLabels.split(",")],
      },
    });
  };

  return (
    <>
      <form className="form-recipe">
        <div className="form-block">
          <label title="name" htmlFor="name">
            {"Recipe name: "}
          </label>
          <input
            type="text"
            name="label"
            id="label"
            onChange={handleChange}
            placeholder="Your recipe name"
          />
        </div>
        <div className="form-block">
          <label title="image" htmlFor="image">
            {"Image URL: "}
          </label>
          <input
            placeholder="Your recipe image"
            type="url"
            name="image"
            id="image"
            onChange={handleChange}
          />
          <img src={formData.image} width={300} alt={formData.label} />
        </div>
        <div className="form-block">
          <label title="yield" htmlFor="yield">
            {"Number of servings: "}
          </label>
          <input
            placeholder="For how many people"
            type="number"
            name="yield"
            id="yield"
            onChange={handleChange}
          />
        </div>
        <div className="form-block">
          <label title="dietLabels" htmlFor="dietLabels">
            {"Diet labels: "}
          </label>
          <input
            placeholder="Ex: low-sodium, vegan"
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
