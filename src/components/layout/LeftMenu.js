import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard";

class LeftMenu extends Component {
  render() {
    return (
      <div className="wrapper">
        <div id="main-content">
          <div className="row">
            <div
              className="col-3 collapse show d-md-flex bg-light min-vh-100 border border-left-0"
              id="sidebar"
            >
              <ul className="nav flex-column flex-nowrap overflow-hidden">
                <li className="nav-item">
                  <a
                    className="nav-link collapsed text-truncate"
                    to="/"
                    data-toggle="collapse"
                    data-target="#submenu1"
                  >
                    <span className="d-none d-sm-inline side-nav-title">
                      Document Managment
                    </span>
                  </a>
                  <div class="collapse" id="submenu1" aria-expanded="false">
                    <ul class="flex-column pl-2 nav">
                      <li class="nav-item">
                        <Link class="nav-link py-0" to="/createDocuments">
                          <span class="side-nav-title topics">
                            Create a Document
                          </span>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link py-0" to="/">
                          <span class="side-nav-title topics">
                            List Documents
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <Dashboard />
          </div>
        </div>
      </div>
    );
  }
}
export default LeftMenu;
