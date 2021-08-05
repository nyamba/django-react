import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {addLead} from '../../actions/leads';
import PropTypes from 'prop-types';


class Form extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  }

  static propTypes = {
    addLead: PropTypes.func.isRequired
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault()
    const {name, email, message} = this.state
    const lead = {name, email, message}
    this.props.addLead(lead)
    this.setState({name:'', email:'', message:''})
  }

	render(){
    const {name, email, message} = this.state

		return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.onChange}
              value={name}
              />
          </div>
          <div className="mb-3">
            <label className="form-label" >Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.onChange}
              value={email}
              />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <input
              type="text"
              className="form-control"
              name="message"
              onChange={this.onChange}
              value={message}
              />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
	}
}

export default connect(null, {addLead})(Form)