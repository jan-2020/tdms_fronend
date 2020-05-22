import React, { Component } from 'react';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import TwoWayBinding from '../.././TwoWayBinding';
import { createAssignment } from "../../actions/assignmentActions";
import CKEditor from 'ckeditor4-react';

class AddAssignment extends Component
{
	constructor(props){
		super(props);
		this.state={
		subjectNames:['Java','C','C++'],
		topicNames:['OOPs','Inheritance'],
		subjectName:"Java",
		topicName:"OOPs",
	    subTopicName:"",
		assignmentIdentifier:"",
	    content:"",
	    level:"",
	    assignmentName:"",
		assign_time:"",
		data: '<p>React is really <em>nice</em>!</p>',
		value: 'coconut'
       }

	   this.onChange1=this.onChange1.bind(this);
	   this.handleDataChange = this.handleDataChange.bind( this );
	   this.handleChange = this.handleChange.bind( this );
       this.onEditorChange = this.onEditorChange.bind( this );
	   this.onSubmit=this.onSubmit.bind(this);
	}

	onChange1(event) {
    this.setState({ [event.target.name]: event.target.value });
    }

	 
	 onSubmit(event){
        event.preventDefault();
        const newAssignment={
            subjectName:this.state.subjectName,
            topicName:this.state.topicName,
            subTopicName:this.state.subTopicName,
            content:this.state.content,
            level:this.state.level,
			assignmentName:this.state.assignmentName,
			assign_time:this.state.assign_time,
			assignmentIdentifier:this.state.assignmentIdentifier
        };
        console.log(newAssignment);
        this.props.createAssignment(newAssignment,this.props.history);
	}

	handleDataChange(data){
	    
		this.setState({content:data});
	}

	onEditorChange( evt ) {
        this.setState( {
            data: evt.editor.getData(),
			content:evt.editor.getData()
        } );
        
    }

	handleChange( changeEvent ) {
        this.setState( {
            data: changeEvent.target.value
        } );

       
    }


	
	 onChange = date => this.setState({ date })
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
							<h1 className="display-4 text-center">Create Assignment</h1>
							<form onSubmit={this.onSubmit}>
							<h5 className="float-left">Subject Name</h5>
							<div className="form-group">
							<select name="subjectName" value={this.state.subjectName} onChange={this.onChange1} className="form-control form-control-lg">
							     {this.state.subjectNames.map(function(subject){
									return <option value={subject}>{subject}</option>
								 })}
                                 
                             </select>
							 </div>
							 <h5 className="float-left">Topic Name</h5>
							 <div className="form-group">
							<select name="topicName" value={this.state.topicNames} onChange={this.onChange1} className="form-control form-control-lg">
							     {this.state.topicNames.map(function(topic){
									return <option value={topic}>{topic}</option>
								 })}
                                 
                             </select>
							 </div>
							<h5 className="float-left">Subtopic Name</h5>
							<div className="form-group">
                            <input type="text"  className={classnames("form-control form-control-lg")} name="subTopicName" onChange={this.onChange1}/> 
                            </div>
							<h5 className="float-left">Level</h5>
							<div className="form-group">
                            <input type="text" className={classnames("form-control form-control-lg")} name="level" onChange={this.onChange1}/> 
                            </div>
							<h5 className="float-left">Assignment Name</h5>
							<div className="form-group">
                            <input type="text" className={classnames("form-control form-control-lg")} name="assignmentName" onChange={this.onChange1}/> 
                            </div>

							<h5 className="float-left">Assignment Identifier</h5>
							<div className="form-group">
                            <input type="text" className={classnames("form-control form-control-lg")} name="assignmentIdentifier" onChange={this.onChange1}/> 
                            </div>
							<h5 className="float-left">Content</h5>
							<div className="form-group">
                             <div name="content" value={this.state.content}>
                              <CKEditor
                              data={this.state.data}
                              onChange={this.onEditorChange} />
                   
                              <EditorPreview data={this.state.data} />
                              {this.sendContent}
                              </div>
                            </div>
							<h5 className="float-left">Assign Time</h5>
							<div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="assign_time"  onChange={this.onChange1}/>
                            </div>
							<input type="submit" className="btn btn-primary btn-block mt-4" />
							</form>
						   </div>	
						</div>
					</div>

					

						</div>
                
					</div>
				</div>

		);
	}
}

class EditorPreview extends Component {
    render() {
        const editorD={ __html: this.props.data };
        return (
            <div className="editor-preview">
                
            </div>
        );
    }
}

EditorPreview.defaultProps = {
    data: ''
};

EditorPreview.propTypes = {
    data: PropTypes.string
};

AddAssignment.propTypes={
    createAssignment:PropTypes.func.isRequired
};

export default connect(null,{createAssignment})(AddAssignment);


