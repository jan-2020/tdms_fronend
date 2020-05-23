import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import Card from 'react-bootstrap/Card'

class AssignmenContent extends Component
{


	render(){
        const { assignment }=this.props;
        const {index=0} = this.props;
		return(

            <tr>
            <td>{1}</td>
            <td>{assignment.content}</td>
            </tr>           
            );
            }
}

export default connect(
  null,
  {  }
)(AssignmenContent);
