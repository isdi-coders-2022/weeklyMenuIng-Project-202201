import Button from "../Button/Button";
import styledComponents from "styled-components";

const Container = styledComponents.div`
color : #151f28;
display:flex;
justify-content:center;
flex-wrap:nowrap;
align-items:center;
border-radius:10px;
background-color: #B3DEE2;
width:900px;
height:600px;`;

const Recipe = ({ className, element }) => {
  return (
    <Container>
      <div className={className}>
        <img src={element.recipe.image} alt={element.recipe.label}></img>
        <h2>{element.recipe.label}</h2>
        {element.recipe.ingredientLines.map((ingredient) => {
          return <p className="ingredient">{ingredient}</p>;
        })}
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

export default Recipe;
