import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (



<header id="main-header">
    <div class="container">
<nav class="navbar fixed-top navbar-light bg-light pb-4 navbar-expand-lg">
    <a class="navbar-brand" href="#">YTDMS</a>
    <div class="d-flex flex-row order-2 order-lg-3">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="collapse navbar-collapse order-3 order-lg-2" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
            <div class="row">
 
            </div>
         



         
        </ul>


        <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link " href="/documents">
                            Documents
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/trainees">
                            Trainee
                        </a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="/trainers">
                            Trainer
                        </a>
                    </li>
                </ul>


    </div>
</nav>
 
    </div>
    </header>

            )
    }
}
export default  Header;








