import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
class AssignmentItem extends Component {

  render() {
    const { list } = this.props;

    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{list.assignmentName}</h3>
              <p>{list.description}</p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
               
                <Link to={`/ViewAssignment/${list.id}`} class="btn btn-success">
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

AssignmentItem.propTypes = {
  
};

export default connect(
  null,
  {}
)(AssignmentItem);