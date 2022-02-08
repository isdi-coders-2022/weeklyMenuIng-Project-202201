import Button from "../Button/Button";
import styledComponents from "styled-components";

const Container = styledComponents.div`
color : white;
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
          background: `#0000006b url(${element.recipe.image}) no-repeat center cover`,
          width: `100%`,
          height: "50vh",
          textAlign: `center`,
        }}
      >
        <h2>{element.recipe.label}</h2>
      </div>
      <div className="recipe-ingredients">
        {element.recipe.ingredientLines.map((ingredient) => {
          return <p className="ingredient">{ingredient}</p>;
        })}
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
