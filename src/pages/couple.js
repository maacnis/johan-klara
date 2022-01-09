// couple.js

import React, { Component } from 'react';
import { ReactBasicScroll } from 'react-basic-scroll';
import data from '../texts/information';
import purpleFlower from '../static/img/purple-flower.jpeg';

class couple extends Component {
  render() {
	const config = {
		from: 'top-bottom',
		to: 'bottom-top',
		props: {
			'--ty': { from: 0, to: 1 },
		},
	}
	return (
		<div>
			<h1 className="couple__header">{data[0].couple.coupleHeader}</h1>
			<div className="sticky-container">
				<ReactBasicScroll config={config}>
					<picture className="sticky-container__img">
						<img  src={purpleFlower} alt={purpleFlower}/>
					</picture>
				</ReactBasicScroll>
			</div>
			<div className="timeline">
				{data[0].couple.timeline.map((date) => {
					return (
						<div key={date.id} className="timeline__event" date-is={date.date}>
							<div className="timeline__content">
								<p className="timeline__text">{date.text}</p>
								{date.image &&
									<img className="timeline__img timeline__img--first" src={date.image} />
								}
								{date.image2 &&
									<img className="timeline__img timeline__img--second" src={date.image2} />
								}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	);
  }
}

export default couple;