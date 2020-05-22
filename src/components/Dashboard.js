import React, { Component } from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";
import { getUsers } from "../actions/UserActions";
import { PropTypes } from "prop-types";
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import * as ReactBootStrap from 'react-bootstrap';
class Dashboard extends Component {
  componentDidMount() {
    this.props.getUsers();
  }



      
  


  render() {
    const { users } = this.props.users;
  
      
    return (
      <div className="users">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Users</h1>
              <br />
              <br />
              
      <table border="1">
              <thead>
              <th class="text-center">Name</th>
              <th class="text-center">Approve</th>
              </thead>
              {users.map(user => (
                <UserItem key={user.id} user={user} />
              ))}

</table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { getUsers }
)(Dashboard);
