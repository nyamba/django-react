import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import {Header} from './layout/Head';
import Dashboard from './leads/Dashboard';


class App extends Component {
	render(){
		return (
			<Fragment>
				<Header />
				<div className="container">
					<Dashboard />
				</div>
			</Fragment>
		)
	}
}

ReactDom.render(<App/>, document.getElementById('app'));