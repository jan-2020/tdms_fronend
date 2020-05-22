import React, { Component } from "react";
import ProjectItem from "./ProjectItem";

import { connect } from "react-redux";
import { getList } from "../actions/DocumentActions";
import { PropTypes } from "prop-types";

class ViewDocument extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getList(id);
  }

  render() {
    const { list } = this.props.list;
    console.log(list);
    return (
      <div className="lists">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Assigned Documents</h1>
              <br />
              <hr />
              
                <ProjectItem key={list.id} list={list} />
              


              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  list: PropTypes.object.isRequired,
  getList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  list: state.list
});

export default connect(
  mapStateToProps,
  { getList }
)(ViewDocument);