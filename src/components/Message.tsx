import React, { useContext, useEffect, useState } from "react";

// context
import { cartGameContext } from "../context/CartGameContextProvider";

const Message: React.FC = () => {
  const { cartGame } = useContext(cartGameContext)!;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const allActive = cartGame.every((item) => item.isActive);
    if (allActive) {
      setIsOpen(true);
    }
  }, [cartGame]);

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-30">
          <div className="fixed inset-0 bg-black opacity-50"></div>

          <div className="bg-slate-800 text-white rounded-xl px-4 py-8 z-50 animate-modal text-center w-5/6 sm:w-1/2">
            <h1 className="text-xl mb-8">Congratulations!</h1>
            <p className="text-sm mb-10">
              You have successfully finished the game.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gray-300 text-slate-800 py-2 px-4 text-sm rounded-xl"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
