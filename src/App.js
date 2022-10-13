import './styles/App.css';
import Dish from './components/dish';
import Header from './components/header';
import { Component } from 'react';

class App extends Component {
	dish = 'tacos';
	dishes = ['Tacos', 'Ceviche', 'Paella'];
	render() {
		return (
			<div className="App">
				<Header />
				<Dish name={this.dish} qty="3" />
				Yo como {this.dish}
				<ul>
					{this.dishes.map(dish => (
						<li>{dish}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default App;
