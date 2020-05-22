import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getDocument } from "../../actions/DocumentActions";
import { createDocument } from "../../actions/DocumentActions";
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
      documentId: "",
      subject: "",
      topic: "",
      subTopic: "",
      tag: "",
      model: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
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
      content: this.state.model,
    };
    console.log("This is content");
    console.log(this.state.model);
    this.props.createDocument(updateDocument, this.props.history);
  }
  componentWillReceiveProps(nextProps) {
    const {
      documentId,
      subject,
      topic,
      subTopic,
      content,
      tag,
    } = nextProps.document;
    this.setState({
      documentId: documentId,
      subject: subject,
      topic: topic,
      subTopic: subTopic,
      model: content,
      tag: tag,
    });
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
      <div class="col-9 section-content-1">
        <article class="document">
          <article class="main-article-inner-1">
            <div class="contact-form">
              <h3 className="text-center py-4">Update Document</h3>
              <form onSubmit={this.onSubmit}>
                <div class="row">
                  <div class="col-md-3">
                    <div class="form-group">
                      <input
                        type="text"
                        name="subject"
                        list="subject"
                        onChange={this.onChange}
                        value={document.subject}
                        className="form-control"
                        aria-describedby="subjectLabel"
                        placeholder="Subject"
                        required
                      />
                      <datalist id="subject">
                        <option value="windows" />
                        <option value="OS" />
                        <option value="React" />
                        <option value="Android" />
                      </datalist>
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        name="topic"
                        list="topic"
                        onChange={this.onChange}
                        value={document.topic}
                        className="form-control"
                        aria-describedby="topicLabel"
                        placeholder="Topic"
                        required
                      />
                      <datalist id="topic">
                        <option value="Loops" />
                        <option value="Tokens" />
                      </datalist>
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        name="subTopic"
                        list="subTopic"
                        onChange={this.onChange}
                        value={document.subTopic}
                        className="form-control"
                        aria-describedby="subTopicLabel"
                        placeholder="Sub Topic"
                        required
                      />
                      <datalist id="subTopic">
                        <option value="For" />
                        <option value="While" />
                        <option value="Do-While" />
                        <option value="NO_SUBTOPIC" />
                      </datalist>
                    </div>
                    {/*Input for tag */}
                    <div class="form-group">
                      <input
                        type="text"
                        name="tag"
                        list="tag"
                        onChange={this.onChange}
                        value={document.tag}
                        className="form-control"
                        aria-describedby="tagLabel"
                        required
                      />
                      <datalist id="tag">
                        <option value="Java" />
                        <option value="Html" />
                        <option value="SQL" />
                        <option value="Oracle" />
                      </datalist>
                    </div>

                    <div class="form-group">
                      <input
                        type="submit"
                        name="submit"
                        class="btnContact "
                        value="Update"
                      />
                    </div>
                  </div>
                  <div class="col-md-9">
                    <div className="form-group">
                      <FroalaEditor
                        tag="textarea"
                        model={this.state.model}
                        onModelChange={this.handleModelChange}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </article>
        </article>
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
