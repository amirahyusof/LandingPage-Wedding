import React from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { FaRegWindowClose } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = React.useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#FFF8E3]/95 backdrop-blur-sm shadow-sm z-50 transition-all">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center text-[#E6A4B4] px-6 py-4">
        <h1 className="font-bold text-2xl tracking-wide">EleganceStudio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#FF407D] transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          <RiMenu4Fill size={28} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-full bg-[#FFD0EC] text-white text-center py-8 transition-all duration-500 ${
          nav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div
          onClick={handleNav}
          className="absolute top-4 right-6 text-white cursor-pointer"
        >
          <FaRegWindowClose size={26} />
        </div>
        <ul className="space-y-6 mt-8 text-xl font-medium uppercase">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={handleNav}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
