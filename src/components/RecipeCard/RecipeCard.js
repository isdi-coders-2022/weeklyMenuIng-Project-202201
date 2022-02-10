import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { v4 } from "uuid";
import Smtwtfs from "../Smtwtfs/Smtwtfs";

const Container = styled.article`
  color: black;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #b3dee2;
  width: 300px;
`;

const RecipeHead = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.image}) no-repeat center;
  background-size: cover;
  background-color: #0000006b;
  border-radius: 10px;
  color: white;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  &:hover {
    background: url(${(props) => props.image}) no-repeat center;
    background-size: cover;
    text-shadow: 2px 0 2px black;
  }
`;

const RecipeCard = ({ recipe: { recipe }, actionOnClickAdd }) => {
  return (
    <Container>
      <RecipeHead image={recipe.image}>
        <div className="recipe-digest">
          <h2 className="recipe-title">{recipe.label}</h2>
          <p>{`${parseInt(recipe.yield)} servings`}</p>
          <h3 className="recipe-calories">{`${parseInt(
            parseInt(recipe.calories) / recipe.yield
          )} Kcal`}</h3>
          <p className="recipe-digest__diet-labels">
            {recipe.dietLabels.map((label) => {
              return (
                <span className="diet-labels__item" key={v4()}>
                  {label}
                </span>
              );
            })}
          </p>
        </div>
        <section className="card-bottom">
          <Smtwtfs />
          <div className="heart-container">
            <button className="heart-button">
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </section>
      </RecipeHead>
    </Container>
  );
};

export default RecipeCard;
