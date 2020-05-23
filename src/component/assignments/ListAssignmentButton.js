import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const ListAssignmentButton=()=>{
	return (
		<React.Fragment>
		<Link to="/listAssignment" className="btn btn-lg btn-info">
			Show Assignment
		</Link>
		</React.Fragment>
	);
}


export default ListAssignmentButton;