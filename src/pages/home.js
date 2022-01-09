// Home.js

import React, { Component } from 'react';
import Hero from '../components/hero';
import data from '../texts/information';

class Home extends Component {
	render() {


		return (
			<div className="home">
				<Hero />
				<div className="home__content">
					<div className="home__text">
						<h1>{data[0].homepage.helloHeader}</h1>
						<p>{data[0].homepage.helloText}</p>
						<p>{data[0].homepage.helloText2}</p>
						<p>{data[0].homepage.helloSignature}</p>
					</div>
					<img className="home__img" src={data[0].homepage.helloImg} />
				</div>
			</div>
		);
	}
}

export default Home;