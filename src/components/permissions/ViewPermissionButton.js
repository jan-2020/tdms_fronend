import React from "react";
import { Link } from 'react-router-dom';

const ViewPermissionButton =()=> {
    return (
		<React.Fragment>

        <Link className="btn btn-lg btn-info" to="/listModules">
           List Permission
        </Link>
		</React.Fragment>

    );
}

export default ViewPermissionButton;