import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUser, getGroups } from '../../actions/projectAction';
import classnames from 'classnames';

class SignUpform extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      userName: "",
      contact: "",
      password: "",
      groupId: "",
      errors: {},
      show: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getGroups();
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      userName: this.state.userName,
      contact: this.state.contact,
      password: this.state.password,
      groupId: this.state.groupId
    };
    //Send call to backend Rest API
    this.props.createUser(newUser, this.props.history);
    this.clearForm();
  }

  clearForm(){
    this.setState({
      name: '',
      email: '',
      userName: '',
      contact: '',
      password: '',
      groupId: ''
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleModal() {
    this.setState({ show: !this.state.show })
  }

  render() {
    const { groups } = this.props.groups;
    const { errors } = this.state;
    return (
      <div>
        <a className="btn btn-primary" onClick={() => { this.handleModal() }}>
          SignUp
      </a>

        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>SignUp Form
          <button type="button" className="close ml-5" onClick={() => { this.handleModal() }}>x</button>
              {errors.mail &&
                <div class="alert alert-danger alert-dismissible">
                  {errors.mail}
                </div>}
            </Modal.Title>
          </Modal.Header>
          <form onSubmit={this.onSubmit} className="needs-validation">
            <Modal.Body>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" className={classnames("form-control", { "is-invalid": errors.name })}
                  placeholder="Enter your Name" name="name"
                  value={this.state.name} onChange={this.onChange} />
                {errors.name && (
                  <div className="invalid-feedback">
                    {errors.name}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label>E-mail:</label>
                <input type="text" className={classnames("form-control", { "is-invalid": errors.email })}
                  placeholder="Enter your E-mail" name="email"
                  value={this.state.email} onChange={this.onChange} />
                {errors.email && (
                  <div className="invalid-feedback">
                    {errors.email}
                  </div>)}
              </div>
              <div className="form-group">
                <label>UserName:</label>
                <input type="text" className={classnames("form-control", { "is-invalid": errors.userName })}
                  placeholder="Enter your Userame" name="userName"
                  value={this.state.userName} onChange={this.onChange} />
                {errors.userName && (
                  <div className="invalid-feedback">
                    {errors.userName}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" className={classnames("form-control", { "is-invalid": errors.password })}
                  placeholder="Enter your Password" name="password"
                  value={this.state.password} onChange={this.onChange} />
                {errors.password && (
                  <div className="invalid-feedback">
                    {errors.password}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label>Contact:</label>
                <input type="text" className={classnames("form-control", { "is-invalid": errors.contact })}
                  placeholder="Enter your Contact" name="contact"
                  value={this.state.contact} onChange={this.onChange} />
                {errors.contact && (
                  <div className="invalid-feedback">
                    {errors.contact}
                  </div>
                )}
              </div>
              <label>Group:</label>
              <select className="form-control" onChange={(e) => this.setState({ groupId: e.target.value })}
                value={this.state.groupId}>
                {groups.map(group => <option key={group.id} value={group.id}>{group.name}</option>)}
              </select>
            </Modal.Body>
            <Modal.Footer>
            <input type="submit" class="btn btn-primary mx-5" />
            <button type="button" className="btn btn-primary ml-5" onClick={() => { this.handleModal() }}>Close</button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}
const MapStateToProps = state => ({
  groups: state.groups,
  errors: state.errors
});

SignUpform.propTypes = {
  createUser: propTypes.func.isRequired,
  group: propTypes.func.isRequired,
  getGroups: propTypes.func.isRequired,
  errors: propTypes.object.isRequired
}
export default connect(MapStateToProps, { createUser, getGroups })(SignUpform);