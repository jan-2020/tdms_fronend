import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";


import { Link } from "react-router-dom";
class DocumentItem extends Component {
  
  render() {
    const { document } = this.props;
    this.state = { sNo: 0 };
    return (
      <tr>
       
        <td>{document.name}</td>
       
        <td>{document.subject}</td>
        <td>{document.tag}</td>
       
        
        <td>
          <Link to={`/updateDocument/${document.documentId}`}>
            <i className="fa fa-edit pr-1"> Update</i>
          </Link>
          &nbsp;&nbsp;
          
        </td>
      </tr>
    );
  }
}
DocumentItem.propTypes = {
  createdItem: PropTypes.func.isRequired,
};
export default connect(null, { })(DocumentItem);
