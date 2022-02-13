import styled from "styled-components";

const DayRecipeCard = styled.li`
  box-sizing: border-box;
  height: 80px;
  margin: 10px;
  position: relative;
  border-radius: 4px;
  background-color: #fffe;
  display: table;

  & p {
    font-size: 13px;
    height: 100px;
    text-justify: inter-cluster;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  }
`;

const DayRecipe = ({ recipe: { recipe } }) => {
  return (
    <DayRecipeCard>
      <p>{recipe.label}</p>
    </DayRecipeCard>
  );
};

export default DayRecipe;
