import React, { Component } from 'react';
import './App.css';
import './Clock.css';
import Clock from './Clock.js';

class App extends Component {
	render() {
		return (
			<div className="App">
			<header className="App-header">
				<Clock />
				<h2>Good Afternoon, Zheng</h2>
			</header>
			</div>
		);
	}
}

export default App;
