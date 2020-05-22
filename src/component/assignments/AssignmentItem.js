import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { deleteAssignment } from "../.././actions/assignmentActions";
class AssignmentItem extends Component
{

onDeleteClick = id => {
    console.log("-------> method called.");
    this.props.deleteAssignment(id);
  };
	render(){
        const { assignment }=this.props;
		return(
			 
                                
                                <tr>
                                    <td>1</td>
                                    <td>{assignment.subjectName}</td>
                                    <td>{assignment.topicName}</td>
                                    <td>{assignment.assignmentName}</td>
                                    <td>{assignment.level}</td>
                                    <td>{assignment.assign_time}</td>
                                    <td>
                                    <button type="button" className="btn btn-light" onClick={this.onDeleteClick.bind(this,
                                                  assignment.id
                                                   )}>Delete</button>&nbsp;&nbsp;
                                    <Link to={`/updateAssignment/${assignment.assignmentIdentifier}`}>
                                    <button type="button" className="btn btn-light">Edit</button>&nbsp;&nbsp;
                                    </Link>
                                    <button type="button" className="btn btn-light">Review</button>
                                    </td>
                                    </tr>
            );
            }
}
AssignmentItem.propTypes = {
  deleteAssignment: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteAssignment }
)(AssignmentItem);
