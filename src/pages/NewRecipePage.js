import CreateRecipeForm from "../components/CreateRecipeForm/CreateRecipeForm";
import Infoblock from "../components/Infoblock/Infoblock";

const NewRecipePage = () => {
  return (
    <>
      <Infoblock text="Create new recipe" />
      <CreateRecipeForm />
    </>
  );
};
export default NewRecipePage;
