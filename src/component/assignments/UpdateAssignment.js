import React,{ Component } from "react";
import { getAssignment } from "../.././actions/assignmentActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import { createAssignment } from "../.././actions/assignmentActions";
class UpdateAssignment extends Component{

    constructor() {
    super();
		this.state={
        id:"",
		subjectName:"",
        assignmentIdentifier:"",
		topicName:"",
	    subTopicName:"",
	    content:"",                              
	    level:"",
	    assignmentName:"",
		assign_time:""
       }
   this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

   onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const updateAssignment = {
      id: this.state.id,
      subjectName: this.state.subjectName,
      assignmentIdentifier: this.state.assignmentIdentifier,
      topicName: this.state.topicName,
      subTopicName: this.state.subTopicName,
      content: this.state.content,
      level: this.state.level,
      assignmentName: this.state.assignmentName,
      assign_time: this.state.assign_time
    };

    console.log('UpdateAssignment',updateAssignment);
    this.props.createAssignment(updateAssignment, this.props.history);
  }

   componentWillReceiveProps(nextProps) {
    const {
      id,
      subjectName,
      assignmentIdentifier,
      topicName,
      subTopicName,
      content,
      level,
      assignmentName,
      assign_time
    } = nextProps.assignment;
    this.setState({
      id,
      subjectName,
       assignmentIdentifier,
      topicName,
      subTopicName,
      content,
      level,
      assignmentName,
      assign_time
    });
  }

    componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getAssignment(id, this.props.history);
  }
	render(){
		return (
			<div className="assignment">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="d-flex">
						
			  </div>
            </div>
            <div className="col-lg-8">
              <div className="d-flex">
                <div className="p-4 align-left">
                 <h5 className="float-left">Edit Assignment</h5>
                 <div className="form-group">
                   <form onSubmit={this.onSubmit}>
                     <div className="form-group">
                       <input
                            type="text"
                            className="form-control form-control-lg "
                            placeholder="Subject Name"
                            name="subjectName"
                            value={this.state.subjectName}
                            onChange={this.onChange}/>
                     </div>
                    <div className="form-group">
                       <input
                           type="text"
                           className="form-control form-control-lg"
                           placeholder="Topic Name"
                           name="topicName"
                           value={this.state.topicName}
                           onChange={this.onChange}/>
                   </div>

                  <div className="form-group">
                       <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Sub Topic Name"
                          name="subTopicName"
                          value={this.state.subTopicName}
                          onChange={this.onChange}/>
                  
                 </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Content"
                    name="content"
                    value={this.state.content}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="level"
                    name="level"
                    value={this.state.level}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Assignment Name"
                    name="assignmentName"
                    value={this.state.assignmentName}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Assignment Identifier"
                    name="assignmentIdentifier"
                    value={this.state.assignmentIdentifier}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="assign_time"
                    value={this.state.assign_time}
                    onChange={this.onChange}
                  />
                </div>  
                <input type="submit" className="btn btn-secondary btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
        </div>
      </div>
		);
	}
}



    UpdateAssignment.propTypes = {
  getAssignment: PropTypes.func.isRequired,
  createAssignment: PropTypes.func.isRequired,
  assignment: PropTypes.object.isRequired
};

	const mapStateToProps=state=>({
		assignment:state.assignments.assignment
	});

export default connect(
	mapStateToProps,
	{getAssignment,createAssignment}
)(UpdateAssignment);