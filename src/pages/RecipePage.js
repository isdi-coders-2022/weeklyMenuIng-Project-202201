import { useParams } from "react-router-dom";

const RecipePage = () => {
  const { id, api } = useParams();

  return (
    <>
      <main className="main">
        <h1>Id is {id}</h1>
        <h1>Api is {api}</h1>
      </main>
    </>
  );
};
export default RecipePage;
