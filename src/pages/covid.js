// covid.js

import React, { Component } from 'react';
import data from '../texts/information';

class covid extends Component {
	render() {
		return (
			<div className="covid-information">
				<h1 className="covid-information__header">{data[0].covid.covidHeader}</h1>
				<div className="covid-cards">
					<div className="covid-card">
						<p>{data[0].covid.covidText}</p>
						<p>{data[0].covid.covidSubText}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default covid;