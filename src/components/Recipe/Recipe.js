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
  width: 100%;
  height: 50vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
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

      <span
        style={{
          display: `flex`,
          flexDirection: `column`,
        }}
      >
        {recipe.dietLabels.map((label) => {
          return <span className="diet-labels__item">{label}</span>;
        })}
        <p>{`${parseInt(recipe.yield)} servings`}</p>
      </span>
      <div className="recipe-info">
        <div className="recipe-ingredients">
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
          <ul>
            <li>{`Fat: ${parseInt(recipe.digest[0].total)} g`}</li>
            <li>{`Protein: ${parseInt(recipe.digest[1].total)} g`}</li>
            <li>{`Carbs: ${parseInt(recipe.digest[2].total)} g`}</li>
          </ul>
          <ul>
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
          </ul>
        </div>
        {days ? <Smtwtfs recipe={id} smtwtfs={days} /> : ""}
      </div>
      <div className="recipe-buttons">
        <Button
          text="view recipe source"
          className="receipeUrl"
          actionOnClick={viewOriginalSource}
        />
        <Button text="remove recipe" className="button" />
        <Button
          text="Add to my list"
          className="button"
          actionOnClick={actionOnClickAdd}
        />
      </div>
    </Container>
  );
};

export default Recipe;
