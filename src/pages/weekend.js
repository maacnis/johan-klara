// weekend.js

import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import data from '../texts/information';
import smallFlowerTwo from '../static/img/small-flower2.jpeg';
import petal from '../static/img/petal.jpeg';
import arrowIcon from '../static/img/icons-arrow.png';

class weekend extends Component {
  	render() {
		return (
			<div className="weekend-information">
				<h1 className="weekend-information__header">{data[0].weekend.weekendHeader}</h1>
				<div className="weekend-information__container">
					<div className="weekend__card weekend__ceremony">
						<img className="ceremony__card-img" src={smallFlowerTwo} />
						<h2>{data[0].weekend.ceremonyHeader}</h2>
						<p>{data[0].weekend.ceremonyText}</p>
						<p className="weekend__mobile-info">{data[0].weekend.weekendMobileText}</p>
					</div>
					<div className="weekend__card weekend__dinner">
						<img className="dinner__card-img" src={petal} />
						<h2>{data[0].weekend.dinnerAndPartyHeader}</h2>
						<p>{data[0].weekend.dinnerAndPartyText}</p>
						<p className="weekend__mobile-info">{data[0].weekend.weekendMobileText}</p>
					</div>
					<div className="weekend__card weekend__dresscode">
						<h2>{data[0].weekend.dresscodeHeader}</h2>
						<h3>{data[0].weekend.dresscodeSubHeader}</h3>
						<h4>{data[0].weekend.dresscodeHimHeader}</h4>
						<p>{data[0].weekend.dresscodeHimText}</p>
						<h4>{data[0].weekend.dresscodeHerHeader}</h4>
						<p>{data[0].weekend.dresscodeHerText}</p>
					</div>
					<div className="weekend__card weekend__children">
						<h2>{data[0].weekend.childrenHeader}</h2>
						<p>{data[0].weekend.childrenInfo}</p>
					</div>
				</div>

				<Accordion allowZeroExpanded preExpanded={['1']}>
					<AccordionItem uuid="1">
						<AccordionItemHeading>
							<AccordionItemButton>
								<h2>{data[0].weekend.ceremonyHeader}</h2>
								<img src={arrowIcon} />
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<div className="weekend-information__card">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8871.582880475004!2d12.6720648!3d56.2280381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x743069f7932267ce!2sJonstorps%20kyrka!5e0!3m2!1ssv!2sse!4v1636488837404!5m2!1ssv!2sse"
									className="card__iframe"
									allowFullScreen=""
									loading="lazy">
								</iframe>
							</div>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem uuid="2">
						<AccordionItemHeading>
							<AccordionItemButton>
								<h2>{data[0].weekend.dinnerAndPartyHeader}</h2>
								<img src={arrowIcon} />
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<div className="weekend-information__card">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d8870.426377209593!2d12.655086294424313!3d56.23303279095089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x4652285641e4bf7f%3A0x743069f7932267ce!2sJonstorps%20kyrka%2C%20Pg%20Ahnfeldts%20v%C3%A4g%203%2C%20263%2092%20Jonstorp!3m2!1d56.228013499999996!2d12.671735199999999!4m5!1s0x4652285d14aaf9d9%3A0x5d63bcc309542698!2zQmzDpHNpbmdlIEfDpXJkIC8gVmFuZHJhcmhlbSBKb25zdG9ycCwgR2FtbGEgU8O2ZMOla3JhdsOkZ2VuLCBKb25zdG9ycA!3m2!1d56.237620799999995!2d12.6556131!5e0!3m2!1ssv!2sse!4v1636489250342!5m2!1ssv!2sse"
									allowFullScreen=""
									loading="lazy">
								</iframe>
							</div>
						</AccordionItemPanel>
					</AccordionItem>
				</Accordion>

				<div className="weekend__parents-evening">
					<h2>{data[0].weekend.parentsEveningHeader}</h2>
					<p>{data[0].weekend.parentsEveningText}</p>
					<p>{data[0].weekend.parentsEveningText2}</p>
					<p>{data[0].weekend.parentsEveningText3}</p>
					<p>{data[0].weekend.parentsEveningDresscode}</p>
				</div>
			</div>
		);
	}
}

export default weekend;