import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import TestRenderer from "react-test-renderer";

describe("Given a Footer Component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a footer element with text 'My Weekly Menu'", () => {
      const textFooter = "My Weekly Menu";
      render(<Footer />);

      const footerTextElement = screen.getByText(textFooter);

      expect(footerTextElement).toBeInTheDocument();
    });

    test("Then it should match the snapshot", () => {
      const footer = TestRenderer.create(<Footer />).toJSON();

      expect(footer).toMatchSnapshot();
    });
  });
});
