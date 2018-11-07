import React, {
	Component
} from 'react';
import './App.css';
import './components/Clock.css';
import './components/Greeting.css';
import Clock from './components/Clock.js';
import Greeting from './components/Greeting.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		}
	}
	componentDidMount() {
		document.title = "New Tab";
		window.addEventListener('keydown', this.handleKey);
	}

	componentWillUnmount() {
		window.myDiv.removeEventListener('keydown', this.handleKey);
	}

	handleKey = e => {
		if (e.key === '?') {
			console.log("QUESTION?!");
			this.setState({
				show: !this.state.show
			});
		}
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Clock />
					<Greeting />
					{this.state.show ? 'showing':'not showing'}
				</header>
			</div>
		)
	}
}

export default App;
