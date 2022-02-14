import { useEffect } from "react";
import { useState } from "react";
import useAPI from "../../hooks/useAPI";

const CreateRecipeForm = ({ data = null }) => {
  const { addRecipeAPI, updateRecipeAPI } = useAPI();

  const initialFormData = data
    ? {
        label: data.recipe.label,
        image: data.recipe.image,
        yield: data.recipe.yield,
        dietLabels: data.recipe.dietLabels.join(", "),
      }
    : {
        label: "",
        image:
          "https://desenio.es/bilder/artiklar/zoom/8684_2.jpg?imgwidth=435",
        yield: "",
        dietLabels: "",
      };
  const [formData, updateFormData] = useState(initialFormData);

  const resetValues = (clear = false) => {
    if (data !== null) {
      document.querySelector("#label").value = clear ? "" : formData.label;
      document.querySelector("#image").value = clear ? "" : formData.image;
      document.querySelector("#yield").value = clear ? "" : formData.yield;
      document.querySelector("#dietLabels").value = clear
        ? ""
        : formData.dietLabels;
    }
  };
  useEffect(() => {
    resetValues();
  });

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dietLabelsArray = formData.dietLabels
      .split(",")
      .map((label) => label.replace(" ", ""));
    const updatedData = {
      recipe: {
        label: formData.label,
        image: formData.image,
        yield: formData.yield,
        dietLabels: dietLabelsArray,
      },
    };
    if (data !== null) {
      updateRecipeAPI(data.id, updatedData);
    } else {
      addRecipeAPI(updatedData);
    }
    resetValues(true);
  };

  const isFilled =
    formData.label !== "" &&
    formData.image !== "" &&
    formData.yield !== "" &&
    formData.dietLabels !== "";

  return (
    <>
      <form
        className="form-recipe"
        onSubmit={handleSubmit}
        autoComplete="off"
        noValidate
      >
        <div className="form-block">
          {data && <p>{`Recipe Id: ${data.id}`}</p>}
          <label title="label" htmlFor="label">
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
            autoComplete="on"
          />
          <img
            className="form-image"
            src={formData.image}
            alt={formData.label}
          />
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
          <button type="submit" className="button" disabled={!isFilled}>
            {data === null ? `Add recipe to my list` : `Update recipe`}
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateRecipeForm;
