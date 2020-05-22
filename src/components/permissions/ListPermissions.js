import React, { Component } from 'react';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getPermissions } from "../.././actions/permissionActions";
import PermissionItem from './PermissionItem';
import {Link} from 'react-router-dom';
import classnames from "classnames";

class ListPermissions extends Component
{
    

    componentDidMount(){
        this.props.getPermissions();
    }
	render(){
        const {permissions}=this.props.permissions;
        
		return (
			<div className="permission">
			  <div className="container-fluid">
				<div className="row">
				<div className="col-lg-3"> 
                    <div className="d-flex">
					</div>

                </div>

				<div className="col-lg-9">
					<div className="d-flex">
						<div className="p-4 align-left">
							<h1 className="text-center">List Permissions</h1>
							<table className="table table-striped table-dark">
                               <thead>
                                 <tr>
                                    <th scope="col">S.no</th>
                                    <th scope="col">permission name</th>
                                    <th scope="col">operations</th>
                                   
                                   
                                 </tr>
                               </thead>
                               <tbody>
                                     {permissions.map(permission=>(
                        <PermissionItem key={permission.id} permission={permission}/>
                    ))}
			
                                    

                                   
                               </tbody>
                              </table>
                         </div>
					</div>
				</div> 
				</div>
              </div>
            </div>
           );
         }
}

ListPermissions.propTypes={
    permission:PropTypes.object.isRequired,
    getPermissions:PropTypes.func.isRequired,
    
};

const mapStateToProps=state=>(
    { permissions:state.permissions }
);
export default connect(mapStateToProps,{ getPermissions})(ListPermissions);
