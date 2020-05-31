import React, { Component } from 'react';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Angel'
		};
	}

	render() {
		return (
			<header>
				<div className="logo">
					<button
						id="DrawerToggleButton"
						className="toggle-button"
						onClick={this.props.click}
					>
						<div className="toggle-button__line"></div>
						<div className="toggle-button__line"></div>
						<div className="toggle-button__line"></div>
					</button>
					<img src="/img/home-logo.png"></img>
				</div>
				<nav>
					<a href="#">Create Ads</a>
					<a href="#">About Us</a>
					<a href="#">Log in</a>
					<a href="#" className="register-btn">
						Register
					</a>
				</nav>
			</header>
		);
	}
}
