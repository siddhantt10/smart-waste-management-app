import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./NoAccess.css";

function NoAccess() {
  return (
    <div className="noAccess">
      <div className="noAccess-content">
        <h1 className="noAccess-heading">Access Denied!</h1>
        <h3 className="noAccess-subHeading">You are not authorized to access this page.</h3>
        <p className="noAccess-para">
          Please contact your administrator for more information. Seems like you
          are not authorized to access this page. Explore our home page to
          continue.
        </p>
      </div>
      <Link to="/" className="home-link">
        <p>
          <FontAwesomeIcon className="home-link-Icon" icon={faHouse} />
          Go to home page{" "}
        </p>
      </Link>
    </div>
  );
}

export default NoAccess;
