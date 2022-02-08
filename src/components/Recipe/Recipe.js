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
        }}
      >
        <h2>{element.recipe.label}</h2>
      </div>
      <span>{element.recipe.dietLabels}</span>
      <div className="recipe-ingredients">
        {element.recipe.ingredientLines.map((ingredient) => {
          return <p className="ingredient">{ingredient}</p>;
        })}
        <div className="recipe-digest">
          <h3>{element.recipe.calories} Kcal</h3>
          <ul>
            <li>Fat: {element.recipe.digest[0].total} g</li>
            <li>Protein: {element.recipe.digest[1].total} g</li>
            <li>Carbs: {element.recipe.digest[2].total} g</li>
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
