const Links = () => {
  const preventDefault = (event) => {
    event.preventDefault();
  };
  return (
    <ul>
      <li>
        <a onClick={preventDefault} href="myweeklymenu">
          My Weekly Menu
        </a>
      </li>
      <li>
        <a onClick={preventDefault} href="searchrecipes">
          Search Recipes
        </a>
      </li>
      <li>
        <a onClick={preventDefault} href="createnewrecipe">
          Create New Recipe
        </a>
      </li>
      <li>
        <a onClick={preventDefault} href="about">
          About
        </a>
      </li>
    </ul>
  );
};
export default Links;
