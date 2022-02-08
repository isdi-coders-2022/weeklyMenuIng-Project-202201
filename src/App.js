import { Navigate, Route, Routes } from "react-router-dom";
import Infoblock from "./components/Infoblock/Infoblock";
import Button from "./components/Button/Button";
import Recipe from "./components/Recipe/Recipe";
import NewRecipePage from "./pages/NewRecipePage";
import EditRecipePage from "./pages/EditRecipePage";
import MyMenuPage from "./pages/MyMenuPage";
import NotFoundPage from "./pages/NotFoundPage";
import RecipePage from "./pages/RecipePage";
import SearchRecipesPage from "./pages/SearchRecipesPage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header/Header";
import SearchRecipesForm from "./components/SearchRecipesForm/SearchRecipesForm";

const edamamJSON = require("./edamamResponse.json");
const edamamReceipes = edamamJSON.hits;

function App() {
  return (
    <>
      <Header />
      <SearchRecipesForm />
      <Infoblock text="My Weekly Menu" />
      <Button
        text="Add to my recipes"
        className="button"
        actionOnClick={() => window.alert("hola, soy un button!!")}
      />

      <Recipe className="recipe" element={edamamReceipes[15]} />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home">
          <Route index element={<MyMenuPage />} />
          <Route path="view/:id:api" element={<RecipePage />} />
          <Route path="new" element={<NewRecipePage />} />
          <Route path="edit/:id" element={<EditRecipePage />} />
        </Route>
        <Route path="/search">
          <Route index element={<SearchRecipesPage />} />
          <Route path="view/:id:api" element={<RecipePage />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
