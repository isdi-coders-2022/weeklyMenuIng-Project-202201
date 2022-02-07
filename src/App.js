import Infoblock from "./components/Infoblock/Infoblock";
import BurgerComponent from "./components/BurgerComponent/BurgerComponent";
import Checkbox from "./components/Checkbox/Checkbox";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Infoblock text="My Weekly Menu" />
      <BurgerComponent />

      <Checkbox className="julai" text="Friday" />

      <Button
        text="Add to my recipes"
        className="button"
        actionOnClick={() => window.alert("hola, soy un button!!")}
      />

    </div>
  );
}

export default App;
