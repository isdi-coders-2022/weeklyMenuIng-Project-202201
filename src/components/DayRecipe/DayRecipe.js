const DayRecipe = ({ recipe: { recipe } }) => {
  return (
    <>
      <p>{recipe.label}</p>
      <img src={recipe.image} alt={recipe.label} />
    </>
  );
};

export default DayRecipe;
