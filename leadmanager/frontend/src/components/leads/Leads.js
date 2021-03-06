import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';


class Leads extends Component {
	static propTypes = {
		leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired
	}

	componentDidMount() {
		this.props.getLeads()
	}

  delete(id) {
    this.props.deleteLead(id)
  }

	render(){
		return (
			<Fragment>
				<h2>Leads List</h2>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Email</th>
							<th>Message</th>
							<th/>
						</tr>
					</thead>
					<tbody>
						{
							this.props.leads.map(lead => (
								<tr key={lead.id}>
									<td>{lead.id}</td>
									<td>{lead.name}</td>
									<td>{lead.email}</td>
									<td>{lead.message}</td>
									<td>
										<button
                      onClick={this.delete.bind(this, lead.id)}
                      className="btn btn-danger btn-sm">
											Delete
										</button>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	leads: state.leads.leads
})

export default connect(mapStateToProps, {getLeads, deleteLead})(Leads)