import Infoblock from "./components/Infoblock/Infoblock";
import BurgerComponent from "./components/BurgerComponent/BurgerComponent";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Infoblock text="My Weekly Menu" />
      <BurgerComponent />
      <Button
        text="Add to my recipes"
        className="button"
        actionOnClick={() => window.alert("hola, soy un button!!")}
      />
    </div>
  );
}

export default App;
