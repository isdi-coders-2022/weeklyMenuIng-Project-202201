import { Navigate, Route, Routes } from "react-router-dom";
import Infoblock from "./components/Infoblock/Infoblock";
import BurgerComponent from "./components/BurgerComponent/BurgerComponent";
import Checkbox from "./components/Checkbox/Checkbox";
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

function App() {
  return (
    <>
      <Header />
      <Infoblock text="My Weekly Menu" />

      <Checkbox className="julai" text="Friday" />

      <Button
        text="Add to my recipes"
        className="button"
        actionOnClick={() => window.alert("hola, soy un button!!")}
      />

      <Recipe
        className="recipe"
        image="https://static2.hoy.es/www/pre2017/multimedia/noticias/200903/20/Media/supermario.jpg"
        title="MARIO"
        description="Super Mario is a platform game series created by Nintendo based on and starring the fictional plumber Mario. Alternatively called the Super Mario Bros.[b] series or simply the Mario[c] series, it is the central series of the greater Mario franchise. At least one Super Mario game has been released for
        every major Nintendo video game console. There are over twenty games in the series."
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
