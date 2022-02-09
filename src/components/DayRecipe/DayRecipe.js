import styled from "styled-components";

const DayRecipe = ({ recipe: { recipe } }) => {
  const DayRecipeCard = styled.li`
    border-radius: 4px;
    height: 30px;
    min-width: 250px;
    max-width: 300px;
    position: relative;

    & img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      border-radius: inherit;
    }
  `;

  const TitleContainer = styled.div`
    top: 0;
    right: 0;
    bottom: 0;
    width: fit-content;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 2;
  `;

  return (
    <DayRecipeCard>
      <TitleContainer>
        <p>{recipe.label}</p>
      </TitleContainer>
      <img src={recipe.image} alt={recipe.label} />
    </DayRecipeCard>
  );
};

export default DayRecipe;
