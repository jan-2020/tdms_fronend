import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header id="main-header">
          <div className="container">
            <nav className="navbar fixed-top navbar-light bg-light pb-4 navbar-expand-lg">
              <Link className="navbar-brand" to="/dashboard">
                YTDMS
              </Link>
              <div className="d-flex flex-row order-2 order-lg-3">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div
                className="collapse navbar-collapse order-3 order-lg-2"
                id="navbarNavDropdown"
              >
                <ul className="navbar-nav ml-auto mr-3">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fas fa-bell"></i> Notifications
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fas fa-user-circle"></i> Profile
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
export default Header;
