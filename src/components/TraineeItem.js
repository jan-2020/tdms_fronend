import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { deleteTrainee } from "../../src/actions/TraineeActions";
import { blockTrainee } from "../../src/actions/TraineeActions";
import { unblockTrainee } from "../../src/actions/TraineeActions";

class TraineeItem extends Component {
  
  
  onDeleteClick = id => {
    console.log("-------> method called.");
    this.props.deleteTrainee(id);
  };
  onBlockClick = id => {
    console.log("-------> method called.");
    this.props.blockTrainee(id);
  };
  onUnBlockClick = id => {
    console.log("-------> method called.");
    this.props.unblockTrainee(id);
  };
  

  render() {
    const { list } = this.props;

    return (
      <tr>
        <td>{list.name}</td>
        <td>              
        
        <button type="button" class="btn btn-danger"
                onClick={this.onDeleteClick.bind(
                    this,
                    list.id
                  )}  >Delete</button>  &nbsp;&nbsp;
       <button type="button"  class="btn btn-warning"
                onClick={this.onBlockClick.bind(
                    this,
                    list.id
                  )}  >Block</button>
                  &nbsp;&nbsp;
         <button type="button" class="btn btn-success"
                onClick={this.onUnBlockClick.bind(
                    this,
                    list.id
                  )}  >UnBlock</button>


      </td>
      </tr>
    );
  }
}

TraineeItem.propTypes = {
  deleteTrainee: PropTypes.func.isRequired
};

export default connect(
  null,
  {deleteTrainee}
)(TraineeItem);