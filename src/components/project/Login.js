import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loginUser} from "./../../action/UserActions";
import classnames from "classnames";
import '../../Login.css';
import {Button, Modal} from 'react-bootstrap'
class Login extends Component {
  constructor(props)
  {
      super(props);
      this.state = { 
        show:false,
        userName: "",
        password: "",
          errors: {}       
      };
      this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleModal()
  {
    this.setState({show:!this.state.show})
  }
  componentWillReceiveProps(nextProps)
  {
      if(nextProps.errors){
          this.setState({errrors: nextProps.errors});
      }
      
  }
  onChange(event)
  {
      this.setState({ [event.target.name]: event.target.value});
  }
  
  onSubmit(event){
      event.preventDefault();
      const userData = {
          userName:this.state.userName,
          password:this.state.password
      };
      this.props.loginUser(userData,this.props.history);
  }
    render(){
      const {errors} = this.props
        return(
          <div className="global-container">
            <Button onClick={()=>{this.handleModal()}}>Sign In</Button>
            <Modal show={this.state.show}>
              <Modal.Header>
              <h3>Sign In</h3>
              {errors.message && 
                <div class="alert alert-danger alert-dismissible">
                  {errors.message}
                </div>}
                <Button type="button" className="close"  onClick={()=>{this.handleModal()}}>
                  <span >&times;</span>
                </Button>
              </Modal.Header>
              <Modal.Body>   
              <form action="" className="needs-validation" novalidate >
                <div className="form-group">
                  <input type="text" className={classnames("form-control form-control-sm ", {
                      "is-invalid": errors.userName
                    })} id="userName" placeholder="Enter username" name="userName" required 
                    value={this.state.userName}
                    onChange={this.onChange}
                    />
                    {errors.userName && (
                    <div className="invalid-feedback">{errors.userName}</div>
                  )}
                  <div className="valid-feedback">Valid.</div>
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                  <input type="password" className={classnames("form-control form-control-sm ", {
                      "is-invalid": errors.password
                    })}
                    placeholder="Enter Password"
                    name="password"
                    required
                    value={this.state.password}
                    onChange={this.onChange} />
                  <div className="valid-feedback">Valid.</div>
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
              </form>
              </Modal.Body>
            </Modal>
          </div>
        )
    }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state =>({
  errors: state.errors // lhs errors comes from combine reducer
});
export default connect(
mapStateToProps, {loginUser}
)(Login);