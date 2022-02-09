import { BrowserRouter } from "react-router-dom";
import reactTestRenderer from "react-test-renderer";
import App from "./App";
import ApiContextProvider from "./store/contexts/ApiContext/ApiContextProvider";
import RecipesContextProvider from "./store/contexts/RecipesContext/RecipesContextProvider";

describe("Given an App component", () => {
  it("Should match the snapshot", () => {
    const app = reactTestRenderer
      .create(
        <ApiContextProvider>
          <RecipesContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </RecipesContextProvider>
        </ApiContextProvider>
      )
      .toJSON();

    expect(app).toMatchSnapshot();
  });
});
