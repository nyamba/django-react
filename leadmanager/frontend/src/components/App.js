import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import {Header} from './layout/Head';
import Dashboard from './leads/Dashboard';
import {Provider} from 'react-redux';
import store from '../store';
import Alerts from './layout/Alerts';

const alertOption = {
  timeout: 3000,
  position: 'top center'
}

class App extends Component {
	render(){
		return (
			<Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOption}>
          <Alerts />
  				<Header />
  				<div className="container">
  					<Dashboard />
  				</div>
        </AlertProvider>
			</Provider>
		)
	}
}

ReactDom.render(<App/>, document.getElementById('app'));