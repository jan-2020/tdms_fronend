import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const GetAssignmentButton=()=>{
	return (
		<React.Fragment>
		<Link to="/getAssignment" className="btn btn-lg btn-info">
			Get Assignment
		</Link>
		</React.Fragment>
	);
}


export default GetAssignmentButton;