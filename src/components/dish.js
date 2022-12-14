import React, { Component, Fragment } from 'react';
import Button from '@mui/material/Button';

export class Flag extends Component {
	render() {
		return (
			<div>
				<h1>Bandera</h1>
			</div>
		);
	}
}

export class Ingredient extends Component {
	render() {
		return (
			<Fragment>
				<h4>Ingredientes</h4>
				<h4>Ingredientes</h4>
			</Fragment>
		);
	}
}

class Dish extends Component {
	ingredients = ['Tortilla', 'Carne', 'Cebolla'];

	countIngredients() {
		return this.ingredients.length;
	}

	render() {
		return (
			<div className="dish">
				<h1>{this.props.name}</h1>
				<h3>{this.countIngredients()} ingredientes</h3>
				<ul>
					{this.ingredients.map(i => (
						<li>{i}</li>
					))}
				</ul>
				<Button variant="contained">Contained</Button>
			</div>
		);
	}
}

export default Dish;
