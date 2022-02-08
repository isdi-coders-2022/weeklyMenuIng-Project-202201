import Button from "../Button/Button";
import styledComponents from "styled-components";

const Container = styledComponents.div`
color : black;
display:flex;
flex-direction:column;
flex-wrap: wrap
justify-content:center;
align-items:center;
border-radius:10px;
background-color: #B3DEE2;
width:90vw;`;

const RecipeCard = ({ className, element }) => {
  return (
    <Container>
      <div
        className="recipe-head"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${element.recipe.image}) no-repeat center`,
          backgroundSize: `cover`,
          backgroundColor: "#0000006b",
          color: "white",
          backgroundImage: `cover`,
          width: `100%`,
          height: "50vh",
          textAlign: `center`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
      >
        <h2>{element.recipe.label}</h2>
      </div>

      <span>{element.recipe.dietLabels}</span>
      <div className="recipe-info">
        <div className="recipe-ingredients">
          {element.recipe.ingredientLines.map((ingredient) => {
            return (
              <p className="ingredient" key={ingredient}>
                {ingredient}
              </p>
            );
          })}
        </div>
        <div
          className="recipe-digest"
          style={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <h3>{parseInt(element.recipe.calories)} Kcal</h3>
          <ul>
            <li>Fat: {parseInt(element.recipe.digest[0].total)} g</li>
            <li>Protein: {parseInt(element.recipe.digest[1].total)} g</li>
            <li>Carbs: {parseInt(element.recipe.digest[2].total)} g</li>
          </ul>
          <ul>
            <li>
              Cholesterol:{" "}
              {parseInt(element.recipe.totalNutrients.CHOLE.quantity)}
            </li>
            <li>
              Sodium: {parseInt(element.recipe.totalNutrients.NA.quantity)}
            </li>
            <li>
              Calcium: {parseInt(element.recipe.totalNutrients.CA.quantity)}
            </li>
            <li>
              Magnesium: {parseInt(element.recipe.totalNutrients.MG.quantity)}
            </li>
            <li>
              Postasium: {parseInt(element.recipe.totalNutrients.K.quantity)}
            </li>
            <li>Iron: {parseInt(element.recipe.totalNutrients.FE.quantity)}</li>
          </ul>
        </div>
      </div>
      <div className="recipe-buttons">
        <Button
          text="GO TO RECIPE"
          className="receipeUrl"
          actionOnClick={(event) => {
            event.preventDefault();
            window.location.href = element.recipe.url;
          }}
        />
        <Button
          text="REMOVE"
          className="button"
          actionOnClick={() => {
            window.alert("so.. you want to remove me, ah?");
          }}
        />
      </div>
    </Container>
  );
};

export default RecipeCard;
