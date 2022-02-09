import styled from "styled-components";
import Smtwtfs from "../Smtwtfs/Smtwtfs";

const Container = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  border-radius: 10px;
  background-color: #b3dee2;
  width: 30vw;
`;

const RecipeCard = ({ recipe: { recipe } }) => {
  return (
    <Container>
      <div
        className="recipe-head"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${recipe.image}) no-repeat center`,
          backgroundSize: `cover`,
          backgroundColor: "#0000006b",
          color: "white",
          backgroundImage: `cover`,
          width: `100%`,
          height: "50vh",
          textAlign: `center`,
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          alignItems: `center`,

        }}
      >
        <div
          className="recipe-digest"
          style={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <h2>{recipe.label}</h2>
          <p>{`${parseInt(recipe.yield)} SERVINGS`}</p>
          <h3>{`${parseInt(
            parseInt(recipe.calories) / recipe.yield
          )} Kcal`}</h3>
          <p>{recipe.dietLabels}</p>
        </div>
        <Smtwtfs />
      </div>
    </Container>
  );
};

export default RecipeCard;
