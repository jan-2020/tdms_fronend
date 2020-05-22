import { Link } from 'react-router-dom';
import React, { Component } from "react";
import DocumentModule from "./DocumentModule";
import UserModule from './UserModule';
import GroupModule from './GroupModule';
import AssignmentModule from './AssignmentModule';
import TaskModule from './TaskModule';
class ListModules extends Component {
    // componentDidMount() {
    //     const { moduleId } = this.props.match.params;
    //     this.props.getPermission(moduleId, this.props.history);
    //   }
    render() {
        // const permissions = this.props.permissions.permissions;
        return (
            <div className="container">
            <br/>
            
            {/* <Link to={`/listPermissions/User`}>
            
            </Link>    */}
            <UserModule/> <br/> <br/>
                        <TaskModule/> <br/> <br/>
                        <DocumentModule/> <br/> <br/>
                        <GroupModule/> <br/>
                        {/* <AssignmentModule/>  */}
                
            </div>



        );
    }

}

export default ListModules;