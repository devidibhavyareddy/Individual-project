import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const {
    user,
    logout,
  } = useContext(AuthContext);

  const linkClass =
    "hover:text-orange-500 transition-colors";

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold text-orange-500"
        >
          PawRescue 🐾
        </Link>

        <div className="flex gap-5 items-center text-gray-700">

          <Link to="/" className={linkClass}>
            Home
          </Link>

          <Link to="/animals" className={linkClass}>
            Animals
          </Link>

          {user ? (
            <>
              <Link to="/favorites" className={linkClass}>
                Favorites
              </Link>

              <Link to="/my-requests" className={linkClass}>
                My Requests
              </Link>

              {user.role === "admin" && (
                <Link
                  to="/admin/dashboard"
                  className="text-orange-600 font-semibold hover:text-orange-700"
                >
                  Admin
                </Link>
              )}

              <span className="text-sm text-gray-500">
                Hi, {user.name}
              </span>

              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={linkClass}>
                Login
              </Link>

              <Link
                to="/register"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors"
              >
                Register
              </Link>
            </>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
