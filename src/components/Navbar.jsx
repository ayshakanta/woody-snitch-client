import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("user logged out");
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document
      .querySelector("html")
      .setAttribute("data-theme", localTheme || theme);
  }, [theme]);

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="allArtAndCraft">All Art & Craft Items</NavLink>
      </li>
      <li>
        <NavLink to="addArtAndCraft">Add Art & Craft Item</NavLink>
      </li>
      <li>
        <NavLink to="myList">My Art & Craft List</NavLink>
      </li>
    </>
  );
  return (
    <div className="lg:mx-10 md:mx-5  mt-10 drop-shadow-md lg:p-4 ">
      <div className="navbar  bg-amber-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>

          <div className="flex justify-center items-center">
            <img className="w-14" src="./../../public/logo.png" alt="" />
            <Link to="/">
              <button className="btn btn-ghost font-extrabold sm:text-xl md:2xl lg:text-3xl">
                Woody Snitch
              </button>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          <label className="cursor-pointer grid place-items-center">
            <input
              onChange={handleTheme}
              type="checkbox"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>

          {user ? (
            <>
              <div
                className="tooltip user-profile mr-2 md:mr-4"
                data-tip={user.displayName}
              >
                <img
                  className="profile-picture w-12 h-12 rounded-full md:ml-2"
                  src={user.photoURL}
                  alt={user.displayName}
                />
              </div>
              <button className="btn text-amber-600" onClick={handleLogout}>
                LogOut
              </button>
            </>
          ) : (
            <>
              <div className="bg-gray-100 p-4 mr-3 rounded-full">
                <FaUser></FaUser>
              </div>

              <NavLink to="/register">
                <button className="btn text-amber-600">Register</button>
              </NavLink>
              <span>/</span>
              <NavLink to="/login">
                <button className="btn text-amber-600">Login</button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
