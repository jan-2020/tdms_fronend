import React, { Component } from "react";
import { Link } from 'react-router-dom';

class GroupModule extends Component{

render(){


    return(
        
        <Link className="btn btn-lg btn-info" to="/listPermissions">
        Group Module
         </Link>

    )
}
}

export default GroupModule;