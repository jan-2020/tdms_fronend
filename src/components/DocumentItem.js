import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

class ProjectItem extends Component {

  render() {
    const { list } = this.props;

    return (
      <tr>
        <td>{list.name}</td>
        <td>              
        
        <Link to={`/document/${list.id}`} class="btn btn-success">
                  <span>Delete</span>
                </Link>
                &nbsp;&nbsp;
                <Link to={`/document/${list.id}`} class="btn btn-success">
                  <span>Block</span>
                </Link>
                &nbsp;&nbsp;
                <Link to={`/document/${list.id}`} class="btn btn-success">
                  <span>Un-Block</span>
                </Link>



      </td>
      </tr>
    );
  }
}

ProjectItem.propTypes = {
  
};

export default connect(
  null,
  {}
)(ProjectItem);