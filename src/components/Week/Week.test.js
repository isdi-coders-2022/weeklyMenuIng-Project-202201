import { render, screen } from "@testing-library/react";
import Week from "./Week";

describe("Given a Week component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 7 lists", () => {
      const expectedNumberOfLists = 7;

      render(<Week />);

      const lists = screen.queryAllByRole("list");

      expect(lists.length).toBe(expectedNumberOfLists);
    });
  });
});
