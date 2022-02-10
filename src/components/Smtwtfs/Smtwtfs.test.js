import { render, screen } from "@testing-library/react";
import Smtwtfs from "../Smtwtfs/Smtwtfs";

describe("Given a Smtetfs component", () => {
  const edamamJSON = require("./edamamResponse.json");
  const edamamReceipes = edamamJSON.hits;
  const edamamRecipe = edamamReceipes[3];

  describe("When instantiated with an edamam object as props", () => {
    test("Then it should render an element with the recipe label as title", () => {
      render(<Smtwtfs smtwtfs={(0, 1, 2, 3, 4, 5, 6)} recipe={edamamRecipe} />);

      const diaS = screen.queryByText("S");

      expect(diaS).toBeInTheDocument();
    });
  });
});
