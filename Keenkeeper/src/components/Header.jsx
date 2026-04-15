import logo from "../assets/logo.png";
import { NavLink } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";

const Header = () => {
  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <img src={logo} />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-semibold text-[#64748B] text-[16px] ${isActive && "bg-[#244D3F] text-white"}`
                }
                to="/"
              >
                <IoHomeOutline />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-semibold text-[#64748B] text-[16px] ${isActive && "bg-[#244D3F] text-white"}`
                }
                to="/timeline"
              >
                <RiTimeLine />
                Timeline
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-semibold text-[#64748B] text-[16px] ${isActive && "bg-[#244D3F] text-white"}`
                }
                to="/starts"
              >
                <GoGraph />
                Stats
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
