import { useState } from "react";

// context
import CartGameContextProvider from "./context/CartGameContextProvider";

// components
import MemoryBoard from "./components/MemoryBoard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Message from "./components/Message";

function App() {
  const [startTimer, setStartTimer] = useState<boolean>(false);
  const [countClick, setCountClick] = useState<number>(0);

  return (
    <CartGameContextProvider>
      <div className="h-screen bg-gray-100 w-full p-8 font-mochiy">
        <Message />
        <Navbar />
        <MemoryBoard
          setStartTimer={setStartTimer}
          countClick={countClick}
          setCountClick={setCountClick}
        />
        <Footer startTimer={startTimer} countClick={countClick} />
      </div>
    </CartGameContextProvider>
  );
}

export default App;
