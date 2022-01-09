// hero.js

import React,  { Component } from "react";
import ImageFadeIn from 'react-image-fade-in';
import img from '../static/img/new-background.jpg';
import emblem from '../static/img/emblem.png';
import iconArrow from '../static/img/icons-arrow.png';

function scrollPastHero() {
	/* const hero = document.querySelector('.hero').offsetHeight; */

	/* console.log(hero); */
}

class Hero extends Component {
	render() {
		scrollPastHero();
		return (
			<div className="hero">
				<picture className="hero__img">
					<img  src={img} alt={img}/>
				</picture>
				<div className="hero__content">
					<ImageFadeIn className="hero__emblem" src={emblem} opacityTransition={5.5} />
{/* 					<button>
						<ImageFadeIn className="hero__arrow" width={24} height={24} src={iconArrow} opacityTransition={10} />
					</button> */}
				</div>
			</div>
		);
	}
}

export default Hero;