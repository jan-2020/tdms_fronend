import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

class ProjectItem extends Component {

  render() {
    const { list } = this.props;

    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{list.name}</h3>
              <p>{list.description}</p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
               
                <Link to={`/document/${list.documentId}`} class="btn btn-success">
                  <span>View</span>
                </Link>

               
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProjectItem.propTypes = {
  
};

export default connect(
  null,
  {}
)(ProjectItem);