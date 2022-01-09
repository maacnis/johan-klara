// Navbar.js

import React,  { Component } from "react";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import logo from '../static/img/logo.png';

class Navbar extends Component {
	state = { isActive: false };

	handleToggle = () => {
		this.setState({ isActive: !this.state.isActive });
	};

	render() {
		const isActive = this.state.isActive;

		return (
			<nav className="navbar">
				<NavLink
					to={'/'}
					isActive={(match) => {
						const site = document.querySelector('.site');

						if (!site) return;

						if (match.isExact) {
							site.classList.add('is-home');
						} else {
							site.classList.remove('is-home');
						}
					}}
					className="nav__link nav__link--logo">
					<picture className="nav__img">
						<img  src={logo} alt={logo}/>
					</picture>
				</NavLink>
				<button className={isActive ? "navbar__btn is-active" : "navbar__btn"} onClick={this.handleToggle}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<div className={isActive ? "nav__list is-active" : "nav__list"}>
					<NavLink to={'/'} exact className="nav__link" activeClassName="selected">Hem</NavLink>
					<NavLink to={'/weekend'} exact className="nav__link" activeClassName="selected">Bröllopshelgen</NavLink>
					<NavLink to={'/practical'} exact className="nav__link" activeClassName="selected">Praktisk information</NavLink>
					<NavLink to={'/couple'} exact className="nav__link" activeClassName="selected">Brudparet</NavLink>
					<NavLink to={'/weddingparty'} exact className="nav__link" activeClassName="selected">Brudföljet</NavLink>
				</div>
			</nav>
		);
	}
}

export default Navbar;