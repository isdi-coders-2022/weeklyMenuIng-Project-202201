import { render, screen } from "@testing-library/react";
import ApiContext from "../../store/contexts/ApiContext/ApiContext";
import ErrorMsg from "./ErrorMsg";

describe("Given an ErrorMsg component", () => {
  describe("When there's an error", () => {
    test("Then it should display the text 'Error fetching data: this is an error'", () => {
      const expectedErrorMsg = "this is an error";
      const apiState = { hasError: true, errorMsg: expectedErrorMsg };

      render(
        <ApiContext.Provider value={{ apiState }}>
          <ErrorMsg />
        </ApiContext.Provider>
      );
      const errorMsg = screen.queryByText(
        `Error fetching data: ${expectedErrorMsg}`
      );

      expect(errorMsg).toBeInTheDocument();
    });
  });

  describe("When there's not an error", () => {
    test("Then it shoudln't render anything", () => {
      const apiState = { hasError: false };

      const { container } = render(
        <ApiContext.Provider value={{ apiState }}>
          <ErrorMsg />
        </ApiContext.Provider>
      );

      expect(container.innerHTML).toHaveLength(0);
    });
  });
});
