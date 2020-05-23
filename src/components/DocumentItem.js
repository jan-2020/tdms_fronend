import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { deleteDocument } from "../actions/DocumentActions";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
class DocumentItem extends Component {
  onDeleteClick = (id) => {
    this.props.deleteDocument(id);
  };
  render() {
    const { document } = this.props;
    return (
      <tr>
        {/* This TDis for subTopic */}
        <td>{document.subTopic}</td>
        {/* This TDis for tag */}
        <td>{document.tag}</td>
        {/* This is TD is for Operations */}
        <td>
          
          <Link onClick={this.onDeleteClick.bind(this, document.documentId)}>
            Delete
            { <i className="fa fa-minus-circle pr-1"> Delete</i> }
          </Link>
        </td>
      </tr>
    );
  }
}
DocumentItem.propTypes = {
  deleteDocument: PropTypes.func.isRequired,
};
export default connect(null, { deleteDocument })(DocumentItem);
