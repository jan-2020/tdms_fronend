import React, { Component } from 'react';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import CreateAssignmentButton  from "./assignments/CreateAssignmentButton";

import ListAssignmentButton from "./assignments/ListAssignmentButton";

class TrainerDashboard extends Component
{
	render(){
		return (
			<div className="container">
				<h1>Trainer Dashboard</h1>
				<CreateAssignmentButton/><br/><br/>
				
				<ListAssignmentButton/>
			</div>
		);
	}
}

export default TrainerDashboard;