import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const ShowAssignmentButton=()=>{
	return (
		<React.Fragment>
		<Link to="/showAssignment" className="btn btn-lg btn-info">
			List Assignment
		</Link>
		</React.Fragment>
	);
}


export default ShowAssignmentButton;