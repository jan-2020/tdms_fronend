import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


class Footer extends Component{
    render(){
        return(
            <footer id="main-footer" class=" bg-light p-3 ">
            <div class="wrapper">
            <div class="row">
              <div class="col-md-4">
                <p class="text-dark">
                <i class="fa fa-cog fa-spin fa-1x"></i> Quick Links</p>
                <p>
                  <a href="#" class="footer-link text-dark text-muted">Profile</a><br></br>
                  <a href="#" class="footer-link text-dark text-muted">Notifications</a><br></br>
                  <a href="#" class="footer-link text-dark text-muted">Samples</a><br></br>
                  <a href="#" class="footer-link text-dark text-muted">Menu</a>
              </p>
              </div>
              <div class="col-md-4 ">
                <p class="text-dark"><i class='fas fa-users'></i> Batch(Jan2020)</p>
                <p><a href="#" data-toggle="modal" data-target="#developerInfo" class="footer-link text-dark text-muted">Developers Description</a></p>
                
  
                <div class="social-bar">
                
                  <a href="#" class="social-icon">
                      <img src="img/facebook.svg" class="social-icons"/>
                  </a>
                   <a href="#" class="social-icon">
                      <img src="img/youtube.svg" class="social-icons"/>
                  </a>
                  <a href="#" class="social-icon">
                      <img src="img/skype.svg" class="social-icons"/>
                  </a>
                  <a href="#" class="social-icon">
                      <img src="img/linkedin.svg" class="social-icons"/>
                  </a>
                  <a href="#" class="social-icon">
                      <img src="img/gmail.svg" class="social-icons"/>
                  </a>
                 
                </div>
              </div>
              <div class="col-md-4 ">
                <p  class="text-dark "><i class='fas fa-copyright'></i> 2020 Copyright:</p>
                <img src="img/yash.png" alt="Yash official logo" class="yash-logo"/>
              </div>
            </div>     
            </div>
            </footer>
     )}
    }
    export  default Footer;