import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { PropTypes } from "prop-types";

class UserItem extends Component {

  render() {
    const { user } = this.props;

    return (
<tr>
<td>          <h3>{user.userName}</h3></td>

    
              <td>
<div class="text-center row">
          <div class="col-sm-4"></div>    <button type="button" class="btn btn-success col-sm-3">Approve</button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-danger col-sm-3">DisApprove</button>
    </div>

              </td>
    </tr>
    );
  }
}

UserItem.propTypes = {
};

export default connect(
  null,
  {}
)(UserItem);
