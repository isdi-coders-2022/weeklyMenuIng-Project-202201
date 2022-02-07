import Infoblock from "./components/Infoblock/Infoblock";
import BurgerComponent from "./components/BurgerComponent/BurgerComponent";
import Button from "./components/Button/Button";
import Recipe from "./components/Recipe/Recipe";

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
      <Recipe
        className="recipe"
        image="https://static2.hoy.es/www/pre2017/multimedia/noticias/200903/20/Media/supermario.jpg"
        title="MARIO"
        description="Super Mario is a platform game series created by Nintendo based on and starring the fictional plumber Mario. Alternatively called the Super Mario Bros.[b] series or simply the Mario[c] series, it is the central series of the greater Mario franchise. At least one Super Mario game has been released for
         every major Nintendo video game console. There are over twenty games in the series."
      />
    </div>
  );
}

export default App;
