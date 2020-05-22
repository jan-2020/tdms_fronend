import React, { Component } from "react";
import { Link } from 'react-router-dom';

class UserModule extends Component{

render(){


    return(
        
        <Link className="btn btn-lg btn-info" to="/listPermissions">
        User Module
         </Link>

    )
}
}

export default UserModule;