import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <div>
      {/* Top bar */}
      <div className="bg-white border-b-4">
        <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-[16px]">
            <span className="text-dark">EKSPRESS@MAIL.COM</span>
            <span>+1 (555) 000-0000</span>
          </div>
          <button className="bg-yellow-400 text-black w-[150px] h-[44px] rounded hover:bg-yellow-500">
            GET QUOTE
          </button>
        </nav>
      </div>

      {/* Main nav */}
      <div className="bg-black">
        <nav className="max-w-7xl mx-auto text-white p-4 flex justify-between items-center h-[94px]">
          <div className="text-xl font-semibold">EKSPRESS</div>
          <div className="space-x-6 text-[16px]">
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
        </nav>
      </div>
    </div>
  );
}
