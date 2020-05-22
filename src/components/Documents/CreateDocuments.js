import React, { Component } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-react";
import { createDocument } from "../../actions/DocumentActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LeftMenu from "../layout/LeftMenu";
// Require Editor CSS files.
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
      model: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
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
    event.preventDefault();
    const newDocument = {
      subject: this.state.subject,
      topic: this.state.topic,
      subTopic: this.state.subTopic,
      tag: this.state.tag,
      content: this.state.model,
    };
    this.props.createDocument(newDocument, this.props.history);
    console.log(this.state.subject);
    console.log(this.state.topic);
    console.log(this.state.subTopic);
    console.log(this.state.tag);
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
      <div>
        <div class="col-9 section-content-1">
          <article class="document">
            <article class="main-article-inner-1">
              <div class="contact-form">
                <h3 className="text-center py-4">Create a Document</h3>
                <form onSubmit={this.onSubmit}>
                  <div class="row">
                    <div class="col-md-3">
                      <div class="form-group">
                        <input
                          type="text"
                          name="subject"
                          list="subject"
                          onChange={this.onChange}
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
                          placeholder="Tag"
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
                          value="Create"
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
