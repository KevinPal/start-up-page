import React, { Component } from 'react';

class Clock extends Component {
	render() {
		var d = new Date();
		return (
			<div className="Clock">
				{d.getHours()} {d.getMinutes()}
			</div>
		);
	}
}

export default Clock;
