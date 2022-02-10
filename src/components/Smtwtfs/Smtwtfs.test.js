import { render, screen } from "@testing-library/react";
import Smtwtfs from "../Smtwtfs/Smtwtfs";

describe("Given a Smtetfs component", () => {
  const edamamJSON = require("./edamamResponse.json");
  const edamamReceipes = edamamJSON.hits;
  const edamamRecipe = edamamReceipes[3];
  const days = [
    { index: null, day: "sunday", active: false, initial: "S" },
    { index: null, day: "monday", active: false, initial: "M" },
    { index: null, day: "tuesday", active: false, initial: "T" },
    { index: null, day: "wednesday", active: false, initial: "W" },
    { index: null, day: "thursday", active: false, initial: "T" },
    { index: null, day: "friday", active: false, initial: "F" },
    { index: null, day: "saturday", active: false, initial: "S" },
  ];

  describe("When instantiated with an edamam object as props", () => {
    test("Then it should render an element with the recipe label as title", () => {
      render(<Smtwtfs smtwtfs={days} recipe={edamamRecipe} />);

      const diaS = screen.queryByText("M");
      expect(diaS).toBeInTheDocument();
    });
  });
});
