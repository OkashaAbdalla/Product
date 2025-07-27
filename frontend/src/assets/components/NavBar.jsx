import { PlusIcon, ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full h-16 p-4 flex items-center bg-cyan-950 z-50 shadow-md  ">
      <div className="relative flex justify-between items-center w-[90%] mx-auto">
        <div >
          <Link to="/">
          <div className=' flex space-x-1 dark:text-white ' >
            <ShoppingCart className=""/>
            <h2  className="font-bold text-xl">Product Store </h2>
            </div>
          </Link>
        </div>

        <div className="flex space-x-2">
          <Link to="/create-product">
            <PlusIcon size={24} className="p-1 bg-gray-600 rounded shadow-xl" />
          </Link>

          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
