import { render, screen } from "@testing-library/react";
import Infoblock from "./Infoblock";
import TestRenderer from "react-test-renderer";

describe("Given a Infoblock component", () => {
  describe("When instantiated", () => {
    test("It should render a heading", () => {
      render(<Infoblock text="" />);

      const heading = screen.queryByRole("heading");

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When instantiated with text 'Welcome to My Weekly Menu'", () => {
    test("It should render a heading with text 'Welcome to My Weekly Menu'", () => {
      const text = "Welcome to My Weekly Menu";
      render(<Infoblock text={text} />);

      const displayedText = screen.queryByText(text);

      expect(displayedText).toBeInTheDocument();
    });
  });

  describe("When it's rendered", () => {
    test("Then it should match the snapshot", () => {
      const info = TestRenderer.create(<Infoblock text="snapshot" />).toJSON();

      expect(info).toMatchSnapshot();
    });
  });
});
