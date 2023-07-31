import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const modalHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="container w-full m-auto flex items-start sm:items-center justify-between">
      <h3 className="font-thin text-base sm:text-lg">Memory</h3>

      <div className="relative">
        <button
          onClick={modalHandler}
          className="bg-orange-500 py-2 px-4 rounded-3xl text-white text-sm sm:hidden"
        >
          Menu
        </button>

        <div
          className={`w-40 flex items-center justify-center gap-4 flex-col bg-slate-700 rounded-xl p-4 absolute top-10 right-0 shadow-xl duration-300 ease-in-out ${
            isOpen
              ? "scale-100 visible opacity-100"
              : "scale-50 invisible opacity-0"
          }
          sm:flex-row sm:scale-100 sm:visible sm:opacity-100 sm:w-auto sm:bg-transparent sm:shadow-none sm:static sm:p-0
          `}
        >
          <button className="bg-orange-500 py-2 px-4 text-xs sm:text-sm rounded-3xl text-white hover:shadow-xl transition duration-300 ease-in-out">
            Restart
          </button>
          <button className="bg-gray-300 py-2 px-4 text-xs sm:text-sm rounded-3xl hover:shadow-xl transition duration-300 ease-in-out">
            New Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
