import React, { Component } from 'react';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getAssignments } from "../.././actions/assignmentActions";
import { deleteAssignment } from "../.././actions/assignmentActions";
import AssignmentItem from './AssignmentItem';
import {Link} from 'react-router-dom';
import classnames from "classnames";

class ListAssignments extends Component
{
    

    componentDidMount(){
        this.props.getAssignments();
    }
	render(){
        const {assignments}=this.props.assignments;
        
		return (
			<div className="assignment">
			  <div className="container-fluid">
				<div className="row">
				<div className="col-lg-3"> 
                    <div className="d-flex">
					</div>

                </div>

				<div className="col-lg-9">
					<div className="d-flex">
						<div className="p-4 align-left">
							<h1 className="text-center">List Assignment</h1>
							<table className="table table-striped table-dark">
                               <thead>
                                 <tr>
                                    <th scope="col">S.no</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Topic</th>
                                   <th scope="col">Assignment Name</th>
                                   <th scope="col">Level</th>
                                    <th scope="col">Time Assigned</th>
                                    <th scope="col">Action</th>
                                   
                                 </tr>
                               </thead>
                               <tbody>
                                     {assignments.map(assignment=>(
                        <AssignmentItem key={assignment.id} assignment={assignment}/>
                    ))}
			
                                    

                                   
                               </tbody>
                              </table>
                         </div>
					</div>
				</div> 
				</div>
              </div>
            </div>
           );
         }
}

ListAssignments.propTypes={
    assignment:PropTypes.object.isRequired,
    getAssignments:PropTypes.func.isRequired,
    
};

const mapStateToProps=state=>(
    { assignments:state.assignments }
);
export default connect(mapStateToProps,{ getAssignments})(ListAssignments);
