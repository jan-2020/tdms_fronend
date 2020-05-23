import React, { Component } from 'react';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getAssignments } from "../.././actions/assignmentActions";
import AssignmentItem from './AssignmentItem';
import AssignmentContent from './AssignmentContent.js'
import {Link} from 'react-router-dom';
import classnames from "classnames";

class AssignmentTable extends Component
{
    

    componentDidMount(){
        this.props.getAssignments();
    }
	render(){
        const {assignments}=this.props.assignments;
        
		return (
            
			 
                        <div>

							<h1 className="text-left">List Assignment</h1>
							<table className="table table-bordered">
                               <thead>
                                 <tr>
                                    <th scope="col">S.no</th>
                                    <th scope="col">Question</th>
                                   
                                 </tr>
                               </thead>
                               <tbody>
                                     {assignments.map(assignment=>(
                        <AssignmentContent key={assignment.id} assignment={assignment}/>
                    ))}
			
                                    

                                   
                               </tbody>
                               
                              </table>
                              <Link to={`/addAsignment}`}>
                                    <button type="button" className="btn btn-dark float-right mr-4">Submit</button>&nbsp;&nbsp;
                                    </Link>
                              </div>
             
				
      
      
      
    
					
           );
           
         }
}


AssignmentTable.propTypes={
    assignment:PropTypes.object.isRequired,
    getAssignments:PropTypes.func.isRequired,
    
};

const mapStateToProps=state=>(
    { assignments:state.assignments }
);
export default connect(mapStateToProps,{ getAssignments})(AssignmentTable);