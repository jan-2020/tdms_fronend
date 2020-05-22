import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const CreateAssignmentButton=()=>{
	return (
		<React.Fragment>
		<Link to="/addAssignment" className="btn btn-lg btn-info">
			Create Assignment
		</Link>
		</React.Fragment>
	);
}


export default CreateAssignmentButton;