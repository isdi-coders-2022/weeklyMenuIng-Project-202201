import { Navigate, Route, Routes } from "react-router-dom";
import NewRecipePage from "./pages/NewRecipePage";
import EditRecipePage from "./pages/EditRecipePage";
import MyMenuPage from "./pages/MyMenuPage";
import NotFoundPage from "./pages/NotFoundPage";
import RecipePage from "./pages/RecipePage";
import SearchRecipesPage from "./pages/SearchRecipesPage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import ErrorMsg from "./components/ErrorMsg/ErrorMsg";
import Week from "./components/Week/Week";

function App() {
  return (
    <>
      <Loading />
      <Header />
      <ErrorMsg />
      <Week />
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
      <Footer />
    </>
  );
}

export default App;
