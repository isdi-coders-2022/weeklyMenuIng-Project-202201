import styled from "styled-components";
import Smtwtfs from "../Smtwtfs/Smtwtfs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 10px;
  background-color: #b3dee2;
  width: 300px;
`;

const RecipeCard = ({ recipe: { recipe } }) => {
  const RecipeHead = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${recipe.image}) no-repeat center;
    background-size: cover;
    background-color: #0000006b;
    border-radius: 10px;
    color: white;
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    &:hover {
      background: url(${recipe.image}) no-repeat center;
      background-size: cover;
      text-shadow: 2px 0 2px black;
    }
  `;
  return (
    <Container>
      <RecipeHead>
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
        <div className="card-footer">
          <FontAwesomeIcon icon={faHeart} className="heart-icon" size="2x" />
        </div>
      </RecipeHead>
    </Container>
  );
};

export default RecipeCard;
