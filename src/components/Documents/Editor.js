import React, { Component } from "react";
import { createDocument } from "../../actions/DocumentActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "froala-editor/js/froala_editor.pkgd.min.js";


import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/js/plugins.pkgd.min.js";
class Editor extends Component {
  constructor() {
    super();
    this.state = {
      subject: "",
      topic: "",
      subTopic: "",
      tag: "",
      name:"",
      model: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const newDocument = {
      subject: this.state.subject,
      topic: this.state.topic,
      subTopic: this.state.subTopic,
      tag: this.state.tag,
      name:this.state.name,
      content: this.state.model,
    };
    this.props.createDocument(newDocument, this.props.history);
    console.log(this.state.subject);
    console.log(this.state.topic);
    console.log(this.state.subTopic);
    console.log(this.state.tag);
    console.log(this.state.name);
    console.log(this.state.model);
  }
  handleModelChange(model) {
    this.setState({
      model: model,
    });
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="card col-md-8 m-auto">
        <div className="card-body">
          <form className="form-group" onSubmit={this.onSubmit}>
            <h4 className="h4 text-center py-4">Create  Document</h4>
            
            <h4>Subject</h4>
            <div className="input-group mb-3">
              
              
              <input
                type="text"
                name="subject"
                list="subject"
                onChange={this.onChange}
                className="form-control"
                aria-describedby="subjectLabel"
                required
              />
              <datalist id="subject">
                <option value="java" />
                <option value="hibernate" />
                <option value="spring" />
                <option value="php" />
              </datalist>
            </div>

            {/*Input for Topic */}
            <h4>Topic</h4>
            <div className="input-group mb-3">
             
              <input
                type="text"
                name="topic"
                list="topic"
                onChange={this.onChange}
                className="form-control"
                aria-describedby="topicLabel"
                required
              />
              <datalist id="topic">
                <option value="Loops" />
                <option value="Tokens" />
              </datalist>
            </div>

            
            <h4>Sub Topic</h4>
            <div className="input-group mb-3">
              
              <input
                type="text"
                name="subTopic"
                list="subTopic"
                onChange={this.onChange}
                className="form-control"
                aria-describedby="subTopicLabel"
                required
              />
              <datalist id="subTopic">
                <option value="variables" />
                <option value="loop" />
                <option value="exception" />
                <option value="multithreading" />
              </datalist>
            </div>

            {/*Input for tag */}
            <h4>Tags</h4>
            <div className="input-group mb-3">
              
              <input
                type="text"
                name="tag"
               
                onChange={this.onChange}
                className="form-control"
               
                required
              />
              
            </div>

            
            <h4>Name of Document</h4>
            <div className="input-group mb-3">
              
              <input
                type="text"
                name="name"
                
                onChange={this.onChange}
                className="form-control"
                aria-describedby="tagLabel"
                required
              />
              
            </div>
            <h4>Type Document content</h4>
            
            <div className="form-group">
              <FroalaEditor
                tag="textarea"
                model={this.state.model}
                onModelChange={this.handleModelChange}
              />
            </div>
            
            <div className="form-group">
              <input
                type="submit"
                name="submit"
                value="Create"
                className="btn btn-primary btn-block mt-4"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  createDocument: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(mapStateToProps, { createDocument })(Editor);
