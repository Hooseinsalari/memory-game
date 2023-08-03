import React, { useState, useEffect } from "react";

// interfaces
import { Item, Props } from "../interfaces";

const Main: React.FunctionComponent<Props> = ({cartGame, setCartGame}) => {
  const [activeCart, setActiveCart] = useState<Item[]>([]);
  const [cartClicked, setCartClicked] = useState<number>(0);

  const activityHandler = (id: number) => {
    const newCartGame = [...cartGame];
    const selectedCart = newCartGame.find((item) => item.id === id);

    if (
      selectedCart?.isActive === false &&
      cartClicked < 2 &&
      activeCart.length <= 2
    ) {
      selectedCart.isActive = true;
      setActiveCart([...activeCart, selectedCart]);
    }

    setCartGame(newCartGame);

    if (cartClicked < 2) {
      setCartClicked((prevState) => (prevState += 1));
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
    setCartClicked(0);
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
      setCartClicked(0);
    }, 500);
  };

  return (
    <div className="grid grid-rows-4 grid-cols-4 mt-16">
      {cartGame.map((i) => (
        <button
          key={i.id}
          className={`w-12 h-12 m-auto mt-4 rounded-full p-2 text-gray-50 ${
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
