import React, { Component } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-react";
import { createDocument } from "../actions/DocumentActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Editor extends Component {
  constructor() {
    super();
    this.state = {
      subject: "",
      topic: "",
      subTopic: "",
      content: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // life cycle hook
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(event) {
    //event.preventDefault();
    const newDocument = {
      subject: this.state.subject,
      topic: this.state.topic,
      subTopic: this.state.subTopic,
      content: this.state.content.replace(/<\/?[^>]+(>|$)/g, ""),
    };
    this.props.createDocument(newDocument, this.props.history);
    console.log(this.state.subject);
    console.log(this.state.topic);
    console.log(this.state.subTopic);
    console.log(this.state.content);
  }
  handleCKEditor = (event, editor) => {
    const data = editor.getData();
    this.setState({
      content: data,
    });
  };
  render() {
    const { errors } = this.state;
    return (
      <div>
        <form className="form-group" onSubmit={this.onSubmit}>
          <p className="h4 text-center py-4">Create a Document</p>
          {/*Input for Subject */}
          <div className="input-group mb-3">
            {/* <FontAwesomeIcon icon={faAtlas} /> */}
            <div className="input-group-prepend">
              <span className="input-group-text" id="subjectLabel">
                Subject
              </span>
            </div>
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
              <option value="windows" />
              <option value="OS" />
              <option value="React" />
              <option value="Android" />
            </datalist>
          </div>

          {/*Input for Topic */}
          <div className="input-group mb-3">
            {/* <FontAwesomeIcon icon={faAtlas} /> */}
            <div className="input-group-prepend">
              <span className="input-group-text" id="topicLabel">
                Topic
              </span>
            </div>
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

          {/*Input for subTopic */}
          <div className="input-group mb-3">
            {/* <FontAwesomeIcon icon={faAtlas} /> */}
            <div className="input-group-prepend">
              <span className="input-group-text" id="subTopicLabel">
                Subtopic
              </span>
            </div>
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
              <option value="For" />
              <option value="While" />
              <option value="Do-While" />
              <option value="NO_SUBTOPIC" />
            </datalist>
          </div>

          {/*Editor */}
          <div className="form-group">
            <CKEditor
              config={{ placeholder: "Type your content here..." }}
              editor={ClassicEditor}
              onInit={(editor) => {}}
              onChange={this.handleCKEditor}
            />
          </div>
          {/*Submit Button */}
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