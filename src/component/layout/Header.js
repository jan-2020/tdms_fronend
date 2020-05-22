import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container-fluid">
            <a className="navbar-brand" href="Dashboard.html">
                YTDMS
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/trainerDashboard">
                            Dashboard
                        </a>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link " href="register.html">
                            Sign Up
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="login.html">
                            Login
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        )
    }
}
export default  Header;