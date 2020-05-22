import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';



class SidePanel extends Component{
    render(){
        return(
        <div id ="sidebar">
            <div class="col-3 collapse show d-md-flex bg-light min-vh-100 border border-left-0" id="sidebar">
            
            
             <ul class="nav flex-column flex-nowrap overflow-hidden"> 
             

                  <div class="doc-heading p-3 nav-link text-truncate collapsed" ><span>Assign Permission
                    </span></div>
                  <li class="nav-item">

                  <Link to ="./Dashboard" class="nav-link collapsed text-truncate" 
                  data-toggle="collapse" data-target="#submenu1">
                      <span class="d-none d-sm-inline side-nav-title">User Module</span></Link>

                      <Link to="./Dashboard" class="nav-link collapsed text-truncate" 
                        data-toggle="collapse" data-target="#submenu1">
                      <span class="d-none d-sm-inline side-nav-title">Group Module</span></Link>

                      <Link to="./Dashboard" class="nav-link collapsed text-truncate"  
                        data-toggle="collapse" data-target="#submenu1">
                      <span class="d-none d-sm-inline side-nav-title">Task Module</span></Link>

                      <Link to="./Dashboard" class="nav-link collapsed text-truncate"  
                        data-toggle="collapse" data-target="#submenu1">
                      <span class="d-none d-sm-inline side-nav-title">Document Module</span></Link>

                      <Link to="./Dashboard" class="nav-link collapsed text-truncate" 
                        data-toggle="collapse" data-target="#submenu1">
                      <span class="d-none d-sm-inline side-nav-title">Assignment Module</span></Link>

                      <Link to="./Dashboard" class="nav-link collapsed text-truncate" 
                        data-toggle="collapse" data-target="#submenu1">
                      <span class="d-none d-sm-inline side-nav-title">Performance Module</span></Link>
                      <br></br>
                      <div class="doc-heading p-3" ><span>View Permission</span></div>                  
              </li>
              
              </ul>
              
              </div>
              </div>
          
        )
    }
}

        export default SidePanel;