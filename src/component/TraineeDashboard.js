import React, { Component } from 'react';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import ShowAssignmentButton from './assignments/ShowAssignmentButton';

class TraineeDashboard extends Component
{
	render(){
		return (
			<div className="container">
				<h1>Trainee Dashboard</h1>
				<ShowAssignmentButton/>
			</div>
		);
	}
}

export default TraineeDashboard;