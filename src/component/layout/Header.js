import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Header extends Component{
    render(){
        return(
        <div>
            <nav class="navbar fixed-top navbar-light bg-light pb-4 navbar-expand-lg">
            <a class="navbar-brand" href="#">YTDMS</a>
             <div class="d-flex flex-row order-2 order-lg-3">
             <button class="navbar-toggler" type="button" data-toggle="collapse" 
              data-target="#navbarNavDropdown">
        <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="collapse navbar-collapse order-3 order-lg-2" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
         
            <li class="nav-item"><a class="nav-link" href="#"><i class='fas fa-user-circle'></i> Profile</a></li>
            <li class="nav-item"><a class="nav-link" href="#"><i class='fas fa-bell'></i> Notifications</a></li>
            <li class="nav-item"><a class="nav-link" href="#"><i class='fas fa-code'></i> Samples</a></li>
         
        </ul>
        </div>
        </nav>
        </div>
        )
        }
        }
        export default Header;