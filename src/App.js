import { Navigate, Route, Routes } from "react-router-dom";
import Infoblock from "./components/Infoblock/Infoblock";
import BurgerComponent from "./components/BurgerComponent/BurgerComponent";
import Checkbox from "./components/Checkbox/Checkbox";
import Button from "./components/Button/Button";
import NewRecipePage from "./pages/NewRecipePage";
import EditRecipePage from "./pages/EditRecipePage";
import MyMenuPage from "./pages/MyMenuPage";
import NotFoundPage from "./pages/NotFoundPage";
import RecipePage from "./pages/RecipePage";
import SearchRecipesPage from "./pages/SearchRecipesPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Infoblock text="My Weekly Menu" />
      <BurgerComponent />

      <Checkbox className="julai" text="Friday" />

      <Button
        text="Add to my recipes"
        className="button"
        actionOnClick={() => window.alert("hola, soy un button!!")}
      />
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
