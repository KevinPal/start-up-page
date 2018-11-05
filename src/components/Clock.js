import React, { Component } from 'react';

class Clock extends Component {
	render() {
		var d = new Date();
		var hour = "" + d.getHours();
		if (hour.length === 1){
			hour = "0" + hour;	
		}
		var minute = "" + d.getMinutes();
		if (minute.length === 1){
			minute = "0" + minute;
		}
		var display = hour + " " + minute;
		return (
			<div className="Clock">
				{display}
			</div>
		);
	}
}

export default Clock;
