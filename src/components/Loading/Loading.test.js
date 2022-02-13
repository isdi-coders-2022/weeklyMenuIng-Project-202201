import { render, screen } from "@testing-library/react";
import ApiContext from "../../store/contexts/ApiContext/ApiContext";
import Loading from "./Loading";

describe("Given a loading component", () => {
  describe("When it's rendered and isLoaded is set to true", () => {
    test("Then the spinner should apear", () => {
      const spinnerTitle = "loading";
      const apiState = { isLoaded: true };

      render(
        <ApiContext.Provider value={{ apiState }}>
          <Loading />
        </ApiContext.Provider>
      );
      const spinner = screen.queryByTitle(spinnerTitle);
      expect(spinner).toBeInTheDocument();
    });
  });

  describe("When it's rendered and isLoaded is set to false", () => {
    test("Then nothing should render", () => {
      const apiState = { isLoaded: false };

      const { container } = render(
        <ApiContext.Provider value={{ apiState }}>
          <Loading />
        </ApiContext.Provider>
      );

      expect(container.innerHTML).toHaveLength(0);
    });
  });
});
