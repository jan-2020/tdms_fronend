import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const CreatePermissionButton=()=>{
	return (
		<React.Fragment>
		<Link to="/addPermission" className="btn btn-lg btn-info">
			Add Permission
		</Link>
		</React.Fragment>
	);
}


export default CreatePermissionButton;