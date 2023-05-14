import React, { useContext } from "react";
import "./Header.css";
import Logo from "../../Source/img/evangadi-logo-home.png";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [userData, setUserData] = useContext(UserContext);
  //This line uses the useContext hook to access the user data stored in the UserContext
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    //This line calls the setUserData function with an object that sets the token and user properties to undefined. This effectively logs the user out of the website.

    localStorage.setItem("auth-token", "");
  };
  //resets the authentication token in local storage to an empty string.
  return (
    <header className="navbar-header">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="Evangadi Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon  icon_menu"></span>
          </button>

          <div
            className="collapse navbar-collapse bg-orange"
            id="navbarCollapse"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a data-scroll="" className="nav-link section-scroll" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  data-scroll=""
                  className="nav-link section-scroll"
                  href="/explained"
                >
                  How it works
                </a>
              </li>
              <li>
                <div className="connect-block">
                  <a
                    className="lnk-toggler btn btn-blue"
                    data-panel=".panel-login"
                    href="/login"
                    onClick={logout}
                  >
                    {userData.user ? `Log Out` : `Sign In`}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
