import React, { Component } from 'react';

export default class Footer extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Angel'
		};
	}
	render() {
		return (
			<footer>
				<nav>
					<a href="#">Create Ads</a>
					<a href="#">About Us</a>
					<a href="#">Listings</a>
					<a href="#">Sign Up</a>
				</nav>
			</footer>
		);
	}
}
