import React, {Component} from 'react';
import '../../Login.css';
import {Button, Modal} from 'react-bootstrap'
class Login extends Component {
  constructor(props)
  {
      super(props);
      this.state = { 
        show:false       
      }
  }
  handleModal()
  {
    this.setState({show:!this.state.show})
  }
    render(){
        return(
          <div className="global-container">
            <Button onClick={()=>{this.handleModal()}}>Sign In</Button>
            <Modal show={this.state.show}>
              <Modal.Header>
                <h3>Sign In</h3>
                <Button type="button" className="close"  onClick={()=>{this.handleModal()}}>
                  <span >&times;</span>
                </Button>
              </Modal.Header>
              <Modal.Body>   
              <form action="" className="needs-validation" novalidate >
                <div className="form-group">
                  <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required/>
                  <div className="valid-feedback">Valid.</div>
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required/>
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

export default Login;