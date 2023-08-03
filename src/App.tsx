import { useState } from "react";

// interfaces
import { Item } from "./interfaces";

// helper
import { shuffleArray } from "./helper/function";

// components
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// data
import items from "./constant";

function App() {
  const [cartGame, setCartGame] = useState<Item[]>(shuffleArray([...items]));
  const [startTimer, setStartTimer] = useState<boolean>(false);

  return (
    <div className="h-screen bg-gray-100 w-full p-8 font-mochiy">
      <Navbar />
      <Main
        cartGame={cartGame}
        setCartGame={setCartGame}
        setStartTimer={setStartTimer}
      />
      <Footer startTimer={startTimer} />
    </div>
  );
}

export default App;
