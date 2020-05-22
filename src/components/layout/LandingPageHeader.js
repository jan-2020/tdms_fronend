
import React,  {Component} from 'react'
import Login from '../project/Login';

class LandingPageHeader extends Component{
    render()
    {
        return(
            
            <header id="main-header">
            <div className="container">
              <nav className="navbar fixed-top navbar-light bg-light pb-4 navbar-expand-lg">
                  <a className="navbar-brand" href="#">YTDMS</a>
                  <div className="d-flex flex-row order-2 order-lg-3">
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                  </div>
                  <div className="collapse navbar-collapse order-3 order-lg-2" id="navbarNavDropdown">
                      <ul className="navbar-nav ml-auto">
                          <li className="nav-item"><Login/></li>
                        </ul>
                  </div>
              </nav>
            </div>
            </header>
        )
    }
}
export default LandingPageHeader;