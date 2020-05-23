import React, { Component } from 'react';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getAssignments } from "../.././actions/assignmentActions";
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
      <div>
      <h1 className="text-center">List Assignment</h1>
      <div class="assignments-card">
          
          
						<div className="row flex-row mr-1">
							
                                     {assignments.map(assignment=>(
                        <AssignmentItem key={assignment.id} assignment={assignment}/>
                    ))}          
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
