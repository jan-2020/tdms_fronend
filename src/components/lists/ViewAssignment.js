import React, { Component } from "react";
import { getList } from "../../actions/AssignmentActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import {uploadFile} from "./../../actions/AssignmentActions";

class ViewAssignment extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
      id: "",
      };
    this.onFileChange=this.onFileChange.bind(this);
    this.onFileUpload=this.onFileUpload.bind(this);
  }



  



onFileChange(event){ 
	this.setState({ selectedFile: event.target.files[0] }); 
	}; 
	
	onFileUpload(event)
	{
	const formData = new FormData(); 
  if(this.state.selectedFile==null)
  {
   alert("No file selected!!!");
  }
  else
  {
	formData.append( 
		"file", 
		this.state.selectedFile, 
		this.state.selectedFile.name 
  
    ); 
    this.props.uploadFile(formData,this.state.id,this.props.history);

  }

} 



  

  componentWillReceiveProps(nextProps) {
    const {
      id,
      assignmentName,
      content,
      topicName,
      subTopicName,
      
    } = nextProps.list;
    this.setState({
      id,
      assignmentName,
      content,
      topicName,
      subTopicName,
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getList(id, this.props.history);
  }

  render() {
    return (

<div class="container-fluid">
<h1 class="text-center" style={{color:"#576b91"}}>{this.state.assignmentName}</h1>
<div class="row">
<div class="col-md-6"><h3 style={{color:"DodgerBlue"}}>Topic:{this.state.topicName}</h3></div>
<div class="col-md-6 text-right"><h3 style={{color:"DodgerBlue"}}>Subtopic:{this.state.subTopicName}</h3></div>
<br></br>
<br></br>
</div>
<span>{this.state.content}</span>
<br></br>
<br></br>
<br></br>
<div class="text-center"> 
				<input type="file" onChange={this.onFileChange} /> 
				<button class="bg-success" onClick={this.onFileUpload}> 
				Submit Assignment 
				</button> 
			</div>
</div>


    );
  }
}

ViewAssignment.propTypes = {
  getList: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
  uploadFile:PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  list: state.lists.list
});
export default connect(
  mapStateToProps,
  { getList, uploadFile }
)(ViewAssignment);