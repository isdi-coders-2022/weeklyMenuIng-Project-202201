import { Link } from "react-router-dom";

const Links = () => {
  return (
    <ul>
      <li>
        <Link to="/home">My Weekly Menu</Link>
      </li>
      <li>
        <Link to="/search">Search Recipes</Link>
      </li>
      <li>
        <Link to="/home/new">Create New Recipe</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
};
export default Links;
