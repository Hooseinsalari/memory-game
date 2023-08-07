import React, { useState, useEffect, useContext } from "react";

// context
import { cartGameContext } from "../context/CartGameContextProvider";

// interfaces
import { Item, MainProps } from "../interfaces";

const Main: React.FunctionComponent<MainProps> = ({ setStartTimer, countClick, setCountClick }) => {
  const { cartGame, setCartGame } = useContext(cartGameContext)!;
  const [activeCart, setActiveCart] = useState<Item[]>([]);

  const activityHandler = (id: number) => {
    const newCartGame = [...cartGame];
    const selectedCart = newCartGame.find((item) => item.id === id);

    if (
      selectedCart?.isActive === false &&
      countClick < 2 &&
      activeCart.length <= 2
    ) {
      selectedCart.isActive = true;
      setActiveCart([...activeCart, selectedCart]);
    }

    setCartGame(newCartGame);

    if (countClick < 2) {
      setCountClick((prevState) => (prevState += 1));
    }

    setStartTimer(true);

    if (cartGame.every((i) => i.isActive)) {
      setStartTimer(false);
    }
  };

  useEffect(() => {
    if (activeCart.length && activeCart[0]?.title === activeCart[1]?.title) {
      currectCartHandler();
    } else if (
      activeCart.length === 2 &&
      activeCart[0]?.title !== activeCart[1]?.title
    ) {
      incorrectCartHandler();
    }
  }, [activeCart]);

  const currectCartHandler = () => {
    const updatedCartGame = cartGame.map((obj) => {
      const modifiedObj = activeCart.find((item) => item.id === obj.id);
      return modifiedObj ? { ...modifiedObj } : obj;
    });
    setCartGame([...updatedCartGame]);
    setCountClick(0);
    setActiveCart([]);
  };

  const incorrectCartHandler = () => {
    const updatedCartGame = cartGame.map((obj) => {
      const modifiedObj = activeCart.find((item) => item.id === obj.id);
      return modifiedObj ? { ...modifiedObj, isActive: false } : obj;
    });
    setTimeout(() => {
      setCartGame([...updatedCartGame]);
      setActiveCart([]);
      setCountClick(0);
    }, 500);
  };

  return (
    <div className="grid grid-rows-4 grid-cols-4 justify-items-center gap-y-8 mt-20 mb-24 sm:mt-16 sm:mb-20 max-w-xl m-auto">
      {cartGame.map((i) => (
        <button
          key={i.id}
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full p-2 text-gray-50 ${
            i.isActive ? "bg-gray-400 animate-flip" : "bg-slate-800"
          }`}
          onClick={() => activityHandler(i.id)}
          disabled={i.isActive === true}
        >
          {i.isActive ? (
            <div dangerouslySetInnerHTML={{ __html: i.svg }}></div>
          ) : null}
        </button>
      ))}
    </div>
  );
};

export default Main;
