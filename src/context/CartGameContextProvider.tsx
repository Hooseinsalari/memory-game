import React, { createContext, useState } from "react";

// data
import items from "../constant";

// helper
import { shuffleArray } from "../helper/function";

// interfaces
import { Item, CartGameContext, CartGameContextValue } from "../interfaces";

//? create context
export const cartGameContext = createContext<CartGameContextValue | undefined>(
  undefined
);

const CartGameContextProvider: React.FC<CartGameContext> = ({ children }) => {
  const [cartGame, setCartGame] = useState<Item[]>(shuffleArray([...items]));

  const contextValue: CartGameContextValue = {
    cartGame,
    setCartGame,
  };

  return (
    <cartGameContext.Provider value={contextValue}>
      {children}
    </cartGameContext.Provider>
  );
};

export default CartGameContextProvider;
