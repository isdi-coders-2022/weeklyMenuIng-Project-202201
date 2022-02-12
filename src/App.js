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

function App() {
  return (
    <>
      <Loading />
      <Header />
      <ErrorMsg />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<MyMenuPage />} />
        <Route path="/search" element={<SearchRecipesPage />} />
        <Route path="/recipe">
          <Route path="view/:api/:id" element={<RecipePage />} />
          <Route path="new" element={<NewRecipePage />} />
          <Route path="edit/:id" element={<EditRecipePage />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
