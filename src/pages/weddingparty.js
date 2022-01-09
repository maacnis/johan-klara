// practical.js

import React, { Component } from 'react';
import data from '../texts/information';

class weddingParty extends Component {
	render() {
		return (
			<div className="bridalparty">
				<h1 className="bridalparty__header">{data[0].bridalparty.bridalPartyHeader}</h1>
				<div className="bridalparty__members">
					{data[0].bridalparty.bridalPartyMembers.map((id) => {
						return (
							<div key={id.id} className="bridalparty__member">
								<div className="bridalparty__information">
									<h3 className="member__name">
										{id.name}
									</h3>
									<p className="member__role">
										{id.role}
									</p>
									<p className="member__background">
										{id.background}
									</p>
								</div>
								{id.image &&
									<img className="member__img" src={id.image} />
								}
							</div>
						)
					})}
				</div>
			</div>
		);
	}
}

export default weddingParty;