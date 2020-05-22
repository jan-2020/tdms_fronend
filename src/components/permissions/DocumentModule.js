import React, { Component } from "react";
import { Link } from 'react-router-dom';

class DocumentModule extends Component{

render(){


    return(
        
        <Link className="btn btn-lg btn-info" to="/listPermissions">
        Document Module
         </Link>

    )
}
}

export default DocumentModule;