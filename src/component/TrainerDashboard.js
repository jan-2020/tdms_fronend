import React, { Component } from 'react';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import ListAssignmentButton from "./assignments/ListAssignmentButton";

class TraineeDashboard extends Component
{
	render(){
		return (
			<div className="container">
				<h1>Trainee Dashboard</h1>
				<ListAssignmentButton/>
			</div>
		);
	}
}

export default TraineeDashboard;