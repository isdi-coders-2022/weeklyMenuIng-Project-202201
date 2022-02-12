import Button from "../Button/Button";
import styled from "styled-components";
import Smtwtfs from "../Smtwtfs/Smtwtfs";

const Container = styled.article`
  color: black;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #b3dee2;
  width: 100%;
`;

const RecipeHead = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.image}) no-repeat center;
  background-size: cover;
  background-color: #0000006b;
  border-radius: 10px 10px 0px 0px;
  color: white;
  font-size: 45px;
  font-weight: bolder;
  width: 100%;
  height: 50vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RecipeLabels = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const RecipeButtons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
`;
const List = styled.ul`
  list-style: none;
`;
const RedDot = styled.div`
  background-color: red;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 5px;
`;
const YellowDot = styled.div`
  background-color: yellow;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 5px;
`;
const GreenDot = styled.div`
  background-color: green;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 5px;
`;
const Recipe = ({
  className,
  recipe: { recipe, days, id },
  actionOnClickAdd,
}) => {
  const viewOriginalSource = () => window.open(recipe.url, "_blank");

  return (
    <Container className={className}>
      <RecipeHead image={recipe.image}>
        <h2>{recipe.label}</h2>
      </RecipeHead>

      <RecipeLabels>
        {recipe.dietLabels.map((label) => {
          return (
            <span className="diet-labels__item">{label.toUpperCase()}</span>
          );
        })}
        <p>{`${parseInt(recipe.yield)} servings`}</p>
      </RecipeLabels>
      <button
        text="VIEW RECIPE SOURCE"
        className="receipeUrl"
        actionOnClick={viewOriginalSource}
        style={{
          backgroundColor: `white`,
          color: `#b3dfe2`,
          width: `180px`,
          padding: `0`,
          fontSize: `15px`,
        }}
      >
        VIEW RECIPE SOURCE
      </button>
      <div className="recipe-info">
        <div className="recipe-ingredients">
          <h3>INGREDIENTS LIST</h3>
          {recipe.ingredientLines.map((ingredient) => {
            return (
              <p className="ingredient" key={`${recipe.label}${ingredient}`}>
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
          <h3>{`${parseInt(
            parseInt(recipe.calories) / recipe.yield
          )} Kcal`}</h3>
          <List>
            <li
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <GreenDot />
              {`Protein: ${parseInt(recipe.digest[1].total)} g`}
            </li>

            <li
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <YellowDot />
              {` Carbs: ${parseInt(recipe.digest[2].total)} g`}
            </li>
            <li
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <RedDot />
              {` Fat: ${parseInt(recipe.digest[0].total)} g`}
            </li>
          </List>
          <List>
            <li>
              {`Cholesterol: ${parseInt(recipe.totalNutrients.CHOLE.quantity)}`}
            </li>
            <li>{`Sodium: ${parseInt(recipe.totalNutrients.NA.quantity)}`}</li>
            <li>{`Calcium: ${parseInt(recipe.totalNutrients.CA.quantity)}`}</li>
            <li>{`Magnesium: ${parseInt(
              recipe.totalNutrients.MG.quantity
            )}`}</li>
            <li>{`Postasium: ${parseInt(
              recipe.totalNutrients.K.quantity
            )}`}</li>
            <li>{`Iron: ${parseInt(recipe.totalNutrients.FE.quantity)}`}</li>
          </List>
        </div>
        {days ? <Smtwtfs recipe={id} smtwtfs={days} /> : ""}
      </div>
      <RecipeButtons className="recipe-buttons">
        <Button text="REMOVE RECIPE" className="button" />
        <Button
          text="ADD TO MY LIST"
          className="button"
          actionOnClick={actionOnClickAdd}
        />
      </RecipeButtons>
    </Container>
  );
};

export default Recipe;
