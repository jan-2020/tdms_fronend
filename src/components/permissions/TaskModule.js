import React, { Component } from "react";
import { Link } from 'react-router-dom';

class TaskModule extends Component{

render(){


    return(
        
        <Link className="btn btn-lg btn-info" to="/listPermissions">
        Task Module
         </Link>

    )
}
}

export default TaskModule;