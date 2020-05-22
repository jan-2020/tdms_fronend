import React, { Component } from "react";

class Footer extends Component {
  render() {
    const today = new Date();
    return (
      <div>
        <footer id="main-footer" className=" bg-light p-3 ">
          <div className="wrapper">
            <div className="row">
              <div className="col-md-4">
                <p className="text-dark">
                  <i className="fa fa-cog fa-spin fa-1x"></i> Ouick Links
                </p>
                <p>
                  <a href="#" className="footer-link text-dark text-muted">
                    Profile
                  </a>
                  <br />
                  <a href="#" className="footer-link text-dark text-muted">
                    Notifications
                  </a>
                  <br />
                  <a href="#" className="footer-link text-dark text-muted">
                    Samples
                  </a>
                  <br />
                  <a href="#" className="footer-link text-dark text-muted">
                    Menu
                  </a>
                </p>
              </div>
              <div className="col-md-4 ">
                <p className="text-dark">
                  <i className="fas fa-users"></i> Batch(Jan2020)
                </p>
                <p>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#developerInfo"
                    className="footer-link text-dark text-muted"
                  >
                    Developers Description
                  </a>
                </p>

                <div className="social-bar">
                  <a href="#" className="social-icon">
                    <img src="img/facebook.svg" className="social-icons" />
                  </a>

                  <a href="#" className="social-icon">
                    <img src="img/skype.svg" className="social-icons" />
                  </a>

                  <a href="#" className="social-icon">
                    <img src="img/linkedin.svg" className="social-icons" />
                  </a>

                  <a href="#" className="social-icon">
                    <img src="img/gmail.svg" className="social-icons" />
                  </a>
                </div>
              </div>
              <div className="col-md-4 ">
                <p className="text-dark ">
                  YASH Technologies <i className="fas fa-copyright"></i>
                  {today.getFullYear()}
                </p>
                <img
                  src="img/yash.png"
                  alt="Yash official logo"
                  className="yash-logo"
                />
              </div>
            </div>
          </div>
        </footer>

        <div className="modal fade" id="developerInfo">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-dark" id="contactModalLabel">
                  Developed By
                </h5>
                <button type="button" className="close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container">
                  <img
                    className="img-responsive  rounded mx-auto d-block"
                    src="img/modal1.jpg"
                    alt="Developer image"
                  />
                  <h5 className="text-dark  text-center text-muted">
                    Prateek Dubey
                  </h5>
                </div>
              </div>
              <div className="modal-footer">
                <p className="text-dark mx-auto d-block">
                  Thank you for Visiting...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
