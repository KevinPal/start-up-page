import React, {
	Component
} from 'react';
import './App.css';
import './components/Clock.css';
import './components/Greeting.css';
import './components/Schedule.css';
import Clock from './components/Clock.js';
import Greeting from './components/Greeting.js';
import Schedule from './components/Schedule.js';
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
			this.setState({
				showSchedule: !this.state.showSchedule
			});
		} else if (e.key === '/') {
			this.setState({
				showDaySchedule: !this.state.showDaySchedule
			});
		}
	}

	render() {
		var d = new Date().getDay();
		d = 1;
		return (
			<div className="App">
				<header className="App-header">
					{this.state.showSchedule || this.state.showDaySchedule ? '':<Clock />}
					{this.state.showSchedule || this.state.showDaySchedule ? '':<Greeting />}
					{!this.state.showSchedule  && this.state.showDaySchedule ? <table><tr><td><Clock/><Greeting/></td><td><Schedule day={d}/></td></tr></table>:''}
					{this.state.showSchedule ? (<Schedule/>):''}
				</header>
			</div>
		)
	}
}

export default App;
