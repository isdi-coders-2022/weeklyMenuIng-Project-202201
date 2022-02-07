import Infoblock from "./components/Infoblock/Infoblock";
import BurgerComponent from "./components/BurgerComponent/BurgerComponent";
import Checkbox from "./components/Checkbox/Checkbox";
function App() {
  return (
    <div className="App">
      <Infoblock text="My Weekly Menu" />
      <BurgerComponent />
      <Checkbox className="julai" text="Friday" />
    </div>
  );
}

export default App;
