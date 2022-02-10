import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import Smtwtfs from "../Smtwtfs/Smtwtfs";
import useAPI from "../../hooks/useAPI";

const Container = styled.article`
  color: black;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #b3dee2;
  width: 300px;
`;

const RecipeHead = styled.div`
  background: url(${(props) => props.image}) no-repeat center;
  filter: grayscale(0.8);
  background-size: cover;
  text-shadow: 2px 0 2px black;
  background-color: #0000006b;
  border-radius: 10px;
  color: white;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  transition: all 0.2s;
  &:hover {
    filter: grayscale(0);
  }
`;

const RecipeCard = ({ recipe: { recipe, days, id }, isMyList = false }) => {
  const [isMine, setIsMine] = useState(false);
  const { addRecipeToMyListAPI, deleteRecipeAPI } = useAPI();

  const toggleMine = () => {
    if (!isMine) {
      addRecipeToMyListAPI({ recipe, days, id });
    } else {
      deleteRecipeAPI(id);
    }
    setIsMine(!isMine);
  };

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
          {days ? <Smtwtfs smtwtfs={days} recipe={id} /> : ""}
          {!isMyList && (
            <div className="heart-container">
              <button
                className={`heart-button ${
                  isMine ? "heart-button--active" : ""
                }`}
                onClick={() => {
                  toggleMine();
                }}
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          )}
        </section>
      </RecipeHead>
    </Container>
  );
};

export default RecipeCard;
