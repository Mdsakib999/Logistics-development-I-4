import { NavLink } from "react-router";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Top bar */}
      <div className="bg-white border-b-4">
        <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-[14px] sm:text-[16px]">
            <span className="text-dark">EKSPRESS@MAIL.COM</span>
            <span>+1 (555) 000-0000</span>
          </div>
          <button className="bg-yellow-400 text-black w-[120px] sm:w-[150px] h-[40px] sm:h-[44px] rounded hover:bg-yellow-500 text-[14px] sm:text-[16px]">
            GET QUOTE
          </button>
        </nav>
      </div>

      {/* Main nav */}
      <div className="bg-black">
        <nav className="max-w-7xl mx-auto text-white p-4 flex justify-between items-center h-[94px]">
          <div className="text-xl font-semibold">EKSPRESS</div>
          <div className="hidden md:flex space-x-6 text-[14px] sm:text-[16px]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 text-[14px]"
                  : "hover:text-yellow-400 text-[14px]"
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
            >
              SERVICES
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
            >
              CONTACT US
            </NavLink>
          </div>

          <button className="md:hidden text-white"
                  onClick = {() =>setIsOpen(!isOpen)}
          >
            {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </button>
        </nav>


        {/* ✅ Mobile dropdown menu */}
        {isOpen && (
          <div className="md:hidden bg-black text-white flex flex-col space-y-4 p-4">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
            >
              SERVICES
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
            >
              CONTACT US
            </NavLink>
          </div>
        )}

      </div>
    </div>
  );
}
