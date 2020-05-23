import React, { Component } from "react";

import DocumentItem from "./DocumentItem";
import { connect } from "react-redux";
import { getLists } from "../actions/DocumentActions";
import { PropTypes } from "prop-types";

class Document extends Component {
  componentDidMount() {
    this.props.getLists();
  }

  render() {
    const { lists } = this.props.lists;
    console.log(lists);
    return (
      <div class="col main pt-5 mt-3">
                <div>
           <div class="container">
  <div class="row">
    <div class="col-8">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Trainee Name</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
        {lists.map(list => (
                <DocumentItem key={list.id} list={list} />
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
Document.propTypes = {
  list: PropTypes.object.isRequired,
  getLists: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(
  mapStateToProps,
  { getLists }
)(Document);