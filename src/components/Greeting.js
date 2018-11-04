import React, { Component } from 'react';

class Greeting extends Component {
	render() {
		var d = new Date();
		if(d.getHours() < 12){
			return (
				<div className="Greeting">
					Good Morning, Zheng
				</div>
			)
		} else {
			return (
				<div className="Greeting">
					Good Afternoon, Zheng
				</div>
			);
		}
	}
}

export default Greeting;
