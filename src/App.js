import React, { Component } from 'react';
import './App.css';
import './components/Clock.css';
import './components/Greeting.css';
import Clock from './components/Clock.js';
import Greeting from './components/Greeting.js';

class App extends Component {
	componentDidMount(){
		document.title = "New Tab";
	}
	render() {
		return (
			<div className="App">
			<header className="App-header">
				<Clock />
				<Greeting />
			</header>
			</div>
		);
	}
}

export default App;
