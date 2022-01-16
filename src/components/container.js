import React,  { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Couple from '../pages/couple';
import Practical from '../pages/practical';
import Weekend from '../pages/weekend';
import weddingParty from "../pages/weddingparty";
import covid from "../pages/covid";

class Container extends Component {
    render() {
		return (
			<div className="container">
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/couple' component={Couple} />
					<Route path='/practical' component={Practical} />
					<Route path='/weekend' component={Weekend} />
					<Route path='/weddingparty' component={weddingParty} />
					<Route path='/covid' component={covid} />
				</Switch>
			</div>
		)
	}
}

export default Container;