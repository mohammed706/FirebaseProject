// styles
import "./Navbar.css";
import Temple from "../assets/temple.svg";
import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "./../hooks/useLogout";

function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="Shat App" />
          <span>MK Shat</span>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        <li>
          {user && (
            <>
              {!isPending && (
                <button className="btn" onClick={logout}>
                  Logout
                </button>
              )}
              {isPending && (
                <button className="btn" disabled>
                  Logging Out ...
                </button>
              )}
            </>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
