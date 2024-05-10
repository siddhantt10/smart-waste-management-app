import React from "react";
import { Link } from "react-router-dom"; // Make sure to import Link if you're using React Router
import "./Navbar.css";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  const navigate = useNavigate();
  const [{ user }] = useStateValue();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate(0);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="logo-lte.png" alt="Logo" />
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>
        <Link to="/collectionmap" className="nav-link">
          Map
        </Link>
        <Link to="/addform" className="nav-link">
          Add Sensor
        </Link>
      </div>

      <div className="logout">
        <Link to={!user && "/signin"} className="nav-link">
          <div onClick={logOut}>
            {user ? "Sign Out " : "Sign In "}
            <FontAwesomeIcon className="icon" icon={faUser} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
