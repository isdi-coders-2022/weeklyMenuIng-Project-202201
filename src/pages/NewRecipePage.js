import CreateRecipeForm from "../components/CreateRecipeForm/CreateRecipeForm";
import Infoblock from "../components/Infoblock/Infoblock";

const NewRecipePage = () => {
  return (
    <>
      <main className="main">
        <Infoblock text="Create new recipe" />
        <CreateRecipeForm />
      </main>
    </>
  );
};
export default NewRecipePage;
