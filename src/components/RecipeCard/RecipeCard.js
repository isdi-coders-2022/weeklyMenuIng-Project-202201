import styledComponents from "styled-components";

const Container = styledComponents.div`
color : black;
display:flex;
flex-direction:column;
flex-wrap: wrap;

border-radius:10px;
background-color: #B3DEE2;
width:30vw;`;

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
          justifyContent: `center`,
          alignItems: `center`,
        }}
      >
        <h2>{recipe.label}</h2>
        <div
          className="recipe-digest"
          style={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <h3>{`${parseInt(recipe.calories)} Kcal`}</h3>
          <ul>
            <li>{`Fat: ${parseInt(recipe.digest[0].total)} g`}</li>
            <li>{`Protein: ${parseInt(recipe.digest[1].total)} g`}</li>
            <li>{`Carbs: ${parseInt(recipe.digest[2].total)} g`}</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default RecipeCard;
