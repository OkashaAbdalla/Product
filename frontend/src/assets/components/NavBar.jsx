import { PlusIcon, SunIcon, ShoppingCart } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className=" w-full px-6 py-4 bg-blue-500/55 text-white">
      
      {/* Brand and Cart (left-aligned) */}
      <div className="flex items-center w-[90%] mx-auto" >
        <Link to="/" className="flex space-x-2">
          {/* Cart icon first */}
          <ShoppingCart className="w-6 h-6" />
          {/* Then the title */}
          <h1 className="text-xl font-bold~">Product Store</h1>
        </Link>
      </div>

      {/* Action icons (top-right) */}
      <div className="absolute top-4 right-4 flex items-center space-x-3">
        <Link to="/create-product">
          <PlusIcon size={16} className="p-1 bg-gray-500 w-6 h-6 rounded-full shadow-xl" />
        </Link>
        <SunIcon size={16} className="p-1 bg-gray-500 w-6 h-6 rounded-full shadow-xl" />
      </div>
    </div>
  );
}

export default NavBar;
