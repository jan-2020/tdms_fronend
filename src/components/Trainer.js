import React, { Component } from "react";

import TrainerItem from "./TrainerItem";
import { connect } from "react-redux";
import { getLists } from "../actions/TrainerActions";
import { PropTypes } from "prop-types";

class Trainer extends Component {
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
              <h1 className="display-4 text-center">List of Trainers</h1>
              <br />
              <hr />
              <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Trainee Name</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
        {lists.map(list => (
                <TrainerItem key={list.id} list={list} />
              ))}          
        </tbody>
      </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Trainer.propTypes = {
  list: PropTypes.object.isRequired,
  getLists: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(
  mapStateToProps,
  { getLists }
)(Trainer);