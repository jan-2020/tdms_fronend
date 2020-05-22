import React, { Component } from "react";
import DocumentItem from "./../DocumentItem";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { getDocuments } from "../../actions/DocumentActions";
class ListDocument extends Component {
  componentDidMount() {
    this.props.getDocuments();
  }
  render() {
    const documents = this.props.documents.documents;
    return (
      <div className="documents">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">List Of Documents</h1>
              <div className="table-responsive-sm">
                <table className="table table-striped ">
                  <thead>
                    <tr>
                      
                      <th scope="col">Name of Document</th>
                      
                      <th scope="col">Subject</th>
                      <th scope="col">Tag</th>
                      <th scope="col">Operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((document) => (
                      <DocumentItem key={document.id} document={document} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ListDocument.propTypes = {
  document: PropTypes.object.isRequired,
  getDocuments: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  documents: state.documents,
});
export default connect(mapStateToProps, { getDocuments })(ListDocument);
