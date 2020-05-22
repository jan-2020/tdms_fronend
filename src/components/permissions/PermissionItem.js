import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { deletePermission } from "../.././actions/permissionActions";
class PermissionItem extends Component
{

onDeleteClick = id => {
    console.log("-------> method called.");
    this.props.deletePermission(id);
  };
	render(){
        const { permission }=this.props;
		return(
			 
                                
                                <tr>
                                    <td>#</td>
                                    <td>{permission.permissionName}</td>
                                    <td>
                                    <button type="button" className="btn btn-light" onClick={this.onDeleteClick.bind(this,
                                                  permission.id
                                                   )}>Delete</button>&nbsp;&nbsp; */}
                                     <Link to={`/updatePermission/${permission.id}`}>
                                    <button type="button" className="btn btn-light">Edit</button>&nbsp;&nbsp;
                                    </Link>
                                   test
                                    </td>
                                    </tr>
            );
            }
}
PermissionItem.propTypes = {
  deletePermission: PropTypes.func.isRequired
};

export default connect(
  null,
  { deletePermission }
)(PermissionItem);
