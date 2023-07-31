const Navbar = () => {
  return (
    <div className="container m-auto flex items-center justify-between px-4">
      <h3 className="font-thin">Memory</h3>

      <div className="flex items-center justify-center gap-4">
        <button className="bg-orange-500 py-2 px-6 text-sm rounded-3xl text-white hover:shadow-xl transition duration-300 ease-in-out">
          Restart
        </button>
        <button className="bg-gray-300 py-2 px-6 text-sm rounded-3xl hover:shadow-xl transition duration-300 ease-in-out">
          New Game
        </button>
      </div>
    </div>
  );
};

export default Navbar;
