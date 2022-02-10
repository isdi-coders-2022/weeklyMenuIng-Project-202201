import { render, screen } from "@testing-library/react";
import Smtwtfs from "../Smtwtfs/Smtwtfs";
import userEvent from "@testing-library/user-event";
import MyRecipesContext from "../../store/contexts/MyRecipesContext/MyRecipesContext";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import { Component } from "react";

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
  render(<Smtwtfs smtwtfs={days} recipe={edamamRecipe} />);
  describe("When instantiated with an edamam object and days array as props", () => {
    test("Then it should render a li element with M as text", () => {
      const diaM = screen.queryByText("M");
      expect(diaM).toBeInTheDocument();
    });
  });
});
