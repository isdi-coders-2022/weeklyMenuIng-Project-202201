import { Link } from "react-router-dom";

const Links = ({ actionOnClick }) => {
  return (
    <ul>
      <li>
        <Link onClick={actionOnClick} to="/home">
          My Weekly Menu
        </Link>
      </li>
      <li>
        <Link onClick={actionOnClick} to="/search">
          Search Recipes
        </Link>
      </li>
      <li>
        <Link onClick={actionOnClick} to="/home/new">
          Create New Recipe
        </Link>
      </li>
      <li>
        <Link onClick={actionOnClick} to="/about">
          About
        </Link>
      </li>
    </ul>
  );
};
export default Links;
