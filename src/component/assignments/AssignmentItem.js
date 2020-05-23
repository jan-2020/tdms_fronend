import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { deleteAssignment } from "../.././actions/assignmentActions";
import Card from 'react-bootstrap/Card'

class AssignmentItem extends Component
{

onDeleteClick = id => {
    console.log("-------> method called.");
    this.props.deleteAssignment(id);
  };
	render(){
        const { assignment }=this.props;
		return(

              
        [
          'Light',
        ].map((variant, idx) => (
          <div class="card-display pr-4">
            <Card
              bg={variant.toLowerCase()}
              key={idx}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '18rem' }}
            >
              <Card.Header>{assignment.topicName}</Card.Header>
              <Card.Body>
                <Card.Title> {assignment.subTopicName}</Card.Title>
              </Card.Body>
              <a type="button" class="btn btn-secondary" href="/assignmentTable">view</a>
            </Card>
            <br />
          </div>
        ))
                                
            );
            }
}
AssignmentItem.propTypes = {
  deleteAssignment: PropTypes.func.isRequired
};

export default connect(
  null,
  {  }
)(AssignmentItem);
