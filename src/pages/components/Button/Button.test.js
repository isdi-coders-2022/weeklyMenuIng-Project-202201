import { render } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it's rendered", () => {
    test("Then it should call a function on click", () => {
      const mockFunction = jest.fn();

      render(
        <Button
          text="Button"
          className="daButon"
          actionOnClick={mockFunction()}
        />
      );

      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
