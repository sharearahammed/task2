import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = 
    <>
        <li className="text-gray-400 font-bold">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-blue-600 font-bold rounded-full"
              : isPending
              ? "pending"
              : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
        </li>
        <li className="text-gray-400 font-bold">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-blue-600 font-bold rounded-full"
              : isPending
              ? "pending"
              : ""
          }
          to={"/about"}
        >
          About
        </NavLink>
        </li>
        <li className="text-gray-400 font-bold">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-blue-600 font-bold rounded-full"
              : isPending
              ? "pending"
              : ""
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
        </li>
    </>
    return (
        <div className="px-0 navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="font-extrabold text-xl">Posts <span className="text-blue-600">Management</span></a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>

</div>
    );
};

export default Navbar;