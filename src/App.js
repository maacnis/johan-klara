// App.js

import React, { Component } from 'react';
import Navbar from './components/navbar';
import Container from './components/container';
import './style/index.scss';

const isHome = window.location.pathname == '/';

class App extends Component {
	render() {
		return (
			<div className={"site " + (isHome ? 'is-home' : '')}>
				<Navbar />
				<Container />
			</div>
		)
	}
}

export default App;
