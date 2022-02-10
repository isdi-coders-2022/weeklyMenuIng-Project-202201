import styled from "styled-components";

const DayRecipeCard = styled.li`
  box-sizing: border-box;
  max-height: 100px;
  margin: 10px;
  position: relative;
  border-radius: 4px;
  & span {
    background-color: #fffe;
    height: 100px;
    text-align: center;
    line-height: 100px;
    display: block;
    position: absolute;
    width: 50%;
    top: 0;
    bottom: 0;
  }
`;

const Image = styled.img`
  object-fit: cover;
  object-position: center;
  max-height: inherit;
  width: 100%;
`;
const DayRecipe = ({ recipe: { recipe } }) => {
  return (
    <DayRecipeCard>
      <span>{recipe.label}</span>
      <Image src={recipe.image} alt={recipe.label} />
    </DayRecipeCard>
  );
};

export default DayRecipe;
