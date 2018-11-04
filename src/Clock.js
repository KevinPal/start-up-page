import React, { Component } from 'react';

class Clock extends Component {
	componentDidMount(){
		document.title = "Start Page";
	}

	render() {
		return (
			<div className="Clock">
				{new Date().toLocaleTimeString()}
			</div>
		);
	}
}

export default Clock;
