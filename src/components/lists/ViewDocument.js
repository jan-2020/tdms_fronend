import React, { Component } from "react";
import { getList } from "../../actions/DocumentActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";

class ViewDocument extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      
    };
    
  }


  componentWillReceiveProps(nextProps) {
    const {
      id,
      name,
      content,
      topic,
      subtopic,
      
    } = nextProps.list;
    this.setState({
      id,
      name,
      content,
      topic,
      subtopic
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getList(id, this.props.history);
  }

  render() {
    return (

<div class="container-fluid">
<h1 class="text-center" style={{color:"#576b91"}}>{this.state.name}</h1>
<div class="row">
<div class="col-md-6"><h3 style={{color:"DodgerBlue"}}>Topic:{this.state.topic}</h3></div>
<div class="col-md-6 text-right"><h3 style={{color:"DodgerBlue"}}>Subtopic:{this.state.subtopic}</h3></div>
<br></br>
<br></br>
</div>
<span>{this.state.content}</span>
</div>

      
    );
  }
}

ViewDocument.propTypes = {
  getList: PropTypes.func.isRequired,
    list: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  list: state.lists.list
});
export default connect(
  mapStateToProps,
  { getList}
)(ViewDocument);