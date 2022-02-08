import { Link } from "react-router-dom";

const Links = () => {
  return (
    <ul>
      <li>
        <Link to="/home" href="myweeklymenu">
          My Weekly Menu
        </Link>
      </li>
      <li>
        <Link to="/search" href="searchrecipes">
          Search Recipes
        </Link>
      </li>
      <li>
        <Link to="/home/new" href="createnewrecipe">
          Create New Recipe
        </Link>
      </li>
      <li>
        <Link to="/about" href="about">
          About
        </Link>
      </li>
    </ul>
  );
};
export default Links;
