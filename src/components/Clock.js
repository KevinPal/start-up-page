import React, {
	Component
} from 'react';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		var hour = "" + this.state.date.getHours();
		if (hour.length === 1) {
			hour = "0" + hour;
		}
		var minute = "" + this.state.date.getMinutes();
		if (minute.length === 1) {
			minute = "0" + minute;
		}
		var display = hour + ":" + minute;
		return (
			<div className="Clock">
				{display}
			</div>
		);
	}
}

export default Clock;
