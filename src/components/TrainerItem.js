import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { deleteTrainer } from "../../src/actions/TrainerActions";
import { blockTrainer } from "../../src/actions/TrainerActions";
import { unblockTrainer } from "../../src/actions/TrainerActions";
class TrainerItem extends Component {
    onDeleteClick = id => {
        console.log("-------> method called.");
        this.props.deleteTrainer(id);
      };
      onBlockClick = id => {
        console.log("-------> method called.");
        this.props.blockTrainer(id);
      };
      onUnBlockClick = id => {
        console.log("-------> method called.");
        this.props.unblockTrainer(id);
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
       <button type="button" class="btn btn-warning"
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

TrainerItem.propTypes = {
  deleteTrainer: PropTypes.func.isRequired
};

export default connect(
  null,
  {deleteTrainer}
)(TrainerItem);