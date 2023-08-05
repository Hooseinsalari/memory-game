import { useState } from "react";

// context
import CartGameContextProvider from "./context/CartGameContextProvider";

// components
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [startTimer, setStartTimer] = useState<boolean>(false);

  return (
    <CartGameContextProvider>
      <div className="h-screen bg-gray-100 w-full p-8 font-mochiy">
        <Navbar />
        <Main setStartTimer={setStartTimer} />
        <Footer startTimer={startTimer} />
      </div>
    </CartGameContextProvider>
  );
}

export default App;
