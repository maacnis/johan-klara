// practical.js

import React, { Component } from 'react';
import data from '../texts/information';

class practical extends Component {
	render() {
		return (
			<div className="practical-information">
				<h1 className="practical-information__header">{data[0].practical.practicalHeader}</h1>
				<div className="practical-cards">
					<div className="practical-card">
						<h2>{data[0].practical.osaHeader}</h2>
						<p>{data[0].practical.osaText}</p>
						<a href={"mailto:" + data[0].practical.osaEmail + "?subject=OSA till Bröllop!"}>{data[0].practical.osaEmail}</a>
						<p>{data[0].practical.osaText2}</p>
					</div>
					<div className="practical-card">
						<h2>{data[0].practical.speechHeader}</h2>
						<p>{data[0].practical.speechText}</p>
						<p>{data[0].practical.speechText2}</p>
						<a href={"mailto:" + data[0].practical.speechEmail + "?subject=Tal/Spex till Bröllop!"}>{data[0].practical.speechEmail}</a>
					</div>
					<div className={"practical-card " + (data[0].practical.weddigGiftsShow ? '' : 'span-2')}>
						<h2>{data[0].practical.livingHeader}</h2>
						<p>{data[0].practical.livingText}</p>
						<a href={"http://" + data[0].practical.livingTextLink}>{data[0].practical.livingTextLink}</a>
						<p>{data[0].practical.livingText2}</p>
					</div>
					{data[0].practical.weddigGiftsShow && 
						<div className="practical-card">
							<h2>{data[0].practical.weddingGiftsHeader}</h2>
							<p>{data[0].practical.weddingGiftsText}</p>
						</div>
					}
				</div>
			</div>
		);
	}
}

export default practical;