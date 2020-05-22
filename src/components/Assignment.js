import React, { Component } from "react";

import AssignmentItem from "./AssignmentItem";
import { connect } from "react-redux";
import { getLists } from "../actions/AssignmentActions";
import { PropTypes } from "prop-types";

class Assignment extends Component {
  componentDidMount() {
    this.props.getLists();
  }

  render() {
    const { lists } = this.props.lists;
    console.log(lists);
    return (
      <div className="lists">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Assigned Assignments</h1>
              <br />
              <hr />
              {lists.map(list => (
                <AssignmentItem key={list.id} list={list} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Assignment.propTypes = {
  list: PropTypes.object.isRequired,
  getLists: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(
  mapStateToProps,
  { getLists }
)(Assignment);