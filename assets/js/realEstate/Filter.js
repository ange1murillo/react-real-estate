import React, { Component } from 'react';

export default class Filter extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Angel'
		};
		this.cities = this.cities.bind(this);
		this.homeTypes = this.homeTypes.bind(this);
		this.bedrooms = this.bedrooms.bind(this);
	}
	componentWillMount() {
		this.props.populateAction();
	}
	cities() {
		if (this.props.globalState.populateFormsData.cities != undefined) {
			var { cities } = this.props.globalState.populateFormsData;

			console.log(cities);
			return cities.map(item => {
				return (
					<option key={item} value={item}>
						{item}
					</option>
				);
			});
		}
	}
	homeTypes() {
		if (this.props.globalState.populateFormsData.homeTypes != undefined) {
			var { homeTypes } = this.props.globalState.populateFormsData;

			console.log(homeTypes);
			return homeTypes.map(item => {
				return (
					<option key={item} value={item}>
						{item}
					</option>
				);
			});
		}
	}
	bedrooms() {
		if (this.props.globalState.populateFormsData.bedrooms != undefined) {
			var { bedrooms } = this.props.globalState.populateFormsData;

			console.log(bedrooms);
			return bedrooms.map(item => {
				return (
					<option key={item} value={item}>
						{item}+ Bedrooms
					</option>
				);
			});
		}
	}

	render() {
		return (
			<section
				id="filter"
				className={this.props.globalState.filter ? 'active' : ''}
			>
				<div className="display-filter">
					<div className="inside">
						<h4>Filter</h4>
						{/* <label htmlFor="city" className="title">
							City
						</label> */}
						<select
							name="city"
							className="filters city"
							onChange={this.props.change}
						>
							<option value="allCities">All Cities</option>
							{this.cities()}
						</select>
						{/* <label htmlFor="city">Home Type</label> */}
						<select
							name="homeType"
							className="filters homeType"
							onChange={this.props.change}
						>
							<option value="allHomeTypes">All Home Types</option>
							{this.homeTypes()}
						</select>

						{/* <label htmlFor="city">Bedrooms</label> */}
						<select
							name="bedrooms"
							className="filters bedrooms"
							onChange={this.props.change}
						>
							{this.bedrooms()}
						</select>

						<div className="filters price">
							<span className="title">Price</span>
							<input
								type="text"
								name="min_price"
								className="min-price"
								onChange={this.props.change}
								value={this.props.globalState.min_price}
							/>
							<input
								type="text"
								name="max_price"
								className="max-price"
								onChange={this.props.change}
								value={this.props.globalState.max_price}
							/>
						</div>
						<div className="filters floor-space">
							<span className="title">Floor Space</span>
							<input
								type="text"
								name="min_floor_space"
								className="min-floor-space"
								onChange={this.props.change}
								value={this.props.globalState.min_floor_space}
							/>
							<input
								type="text"
								name="max_floor_space"
								className="max-floor-space"
								onChange={this.props.change}
								value={this.props.globalState.max_floor_space}
							/>
						</div>
						<div className="filters extras">
							<span className="title">Extras</span>
							<label htmlFor="extras">
								<span>Elevators</span>
								<input
									name="elevator"
									value={this.props.globalState.elevator}
									type="checkbox"
									onChange={this.props.change}
								/>
							</label>
							<label htmlFor="extras">
								<span>Swimming Pool</span>
								<input
									name="pool"
									value={this.props.globalState.pool}
									type="checkbox"
									onChange={this.props.change}
								/>
							</label>
							<label htmlFor="extras">
								<span>Finished Basement</span>
								<input
									name="finished_basement"
									value={this.props.globalState.finished_basement}
									type="checkbox"
									onChange={this.props.change}
								/>
							</label>
							<label htmlFor="extras">
								<span>Gym</span>
								<input
									name="gym"
									value={this.props.globalState.gym}
									type="checkbox"
									onChange={this.props.change}
								/>
							</label>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
