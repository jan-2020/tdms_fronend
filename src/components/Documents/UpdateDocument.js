
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getDocument } from "../../actions/DocumentActions";
import { createDocument } from "../../actions/DocumentActions";
import classnames from "classnames";
import "froala-editor/js/froala_editor.pkgd.min.js";

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/js/plugins.pkgd.min.js";
class UpdateDocument extends Component {
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

  componentWillReceiveProps(nextProps) {
    const {
      documentId,
      subject,
      topic,
      subTopic,
      name,
      content,
      tag,
    } = nextProps.document;
    this.setState({
      documentId: documentId,
      subject: subject,
      topic: topic,
      subTopic: subTopic,
      name:name,
      model: content,
      tag: tag,
    });
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  

  onSubmit(event) {
    event.preventDefault();
    const updateDocument = {
      documentId: this.state.documentId,
      subject: this.state.subject,
      topic: this.state.topic,
      subTopic: this.state.subTopic,
      tag: this.state.tag,
      name:this.state.name,
      content: this.state.model,
    };
    this.props.createDocument(updateDocument, this.props.history);
    console.log(this.state.subject);
    console.log(this.state.topic);
    console.log(this.state.subTopic);
    console.log(this.state.tag);
    console.log(this.state.name);
    console.log(this.state.model);
  }

  componentDidMount() {
    const { documentId } = this.props.match.params;
    this.props.getDocument(documentId, this.props.history);
  }
  handleModelChange(model) {
    this.setState({
      model: model,
    });
  }
  
  
 
  render() {
    const document = this.props.document;
    
    return (
     
      <div className="card col-md-8 m-auto">
        <div className="card-body">
          <form className="form-group" onSubmit={this.onSubmit}>
            <h4 className="h4 text-center py-4">Create  Document</h4>
            {/*Input for Subject */}
            <h4>Subject</h4>
            <div className="input-group mb-3">
              {/* <FontAwesomeIcon icon={faAtlas} /> */}
              
              <input
                type="text"
                name="subject"
                list="subject"
                
                placeholder={document.subject}
                value={this.state.subject}
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
                placeholder={document.topic}
                value={this.state.topic}
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

            {/*Input for subTopic */}
            <h4>Sub Topic</h4>
            <div className="input-group mb-3">
              
              <input
                type="text"
                name="subTopic"
                list="subTopic"
                placeholder={document.subTopic}
                value={this.state.subTopic}
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
                placeholder={document.tag}
                value={this.state.tag}
                onChange={this.onChange}
                className="form-control"
               
                required
              />
              
            </div>

            {/*Input for name */}
            <h4>Name of Document</h4>
            <div className="input-group mb-3">
              
              <input
                type="text"
                name="name"
                placeholder={document.name}
                value={this.state.name}
                onChange={this.onChange}
                className="form-control"
                aria-describedby="tagLabel"
                required
              />
              
            </div>
            <h4>Type Document content</h4>
            {/*Editor */}
            <div className="form-group">
              <FroalaEditor
                tag="textarea"
                model={this.state.model}
                onModelChange={this.handleModelChange}
              />
            </div>
            {/*Submit Button */}
            <div className="form-group">
              <input
                type="submit"
                name="submit"
                value="Update"
                className="btn btn-primary btn-block mt-4"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}


UpdateDocument.propTypes = {
  getDocument: PropTypes.func.isRequired,
  createDocument: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  document: state.documents.document,
});
export default connect(mapStateToProps, { getDocument, createDocument })(
  UpdateDocument
);