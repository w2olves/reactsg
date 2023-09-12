import { useState } from "react";
import AnimalShow from "./AnimalShow";

function App() {
  function getRandomAnimal() {
    const animals = ["dog", "cat", "horse", "gator", "bird"];
    return animals[Math.floor(Math.random() * animals.length)];
  }
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const render = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  return (
    <div>
      <button onClick={handleClick}>Show Animal</button>
      {render}
    </div>
  );
}

export default App;
