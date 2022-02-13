import { render, screen } from "@testing-library/react";
import MyRecipesContextProvider from "../../store/contexts/MyRecipesContext/MyRecipesContextProvider";
import Week from "./Week";

describe("Given a Week component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 7 lists", () => {
      const expectedNumberOfLists = 7;

      render(
        <MyRecipesContextProvider>
          <Week />
        </MyRecipesContextProvider>
      );

      const lists = screen.queryAllByRole("list");

      expect(lists.length).toBe(expectedNumberOfLists);
    });

    test("Then it should check if day is active", () => {
      const expectedActiveDays = [];

      render(
        <MyRecipesContextProvider>
          <Week />
        </MyRecipesContextProvider>
      );

      const activeDays = screen.queryAllByRole("listitem");
      expect(activeDays).toEqual(expectedActiveDays);
    });
  });
});
