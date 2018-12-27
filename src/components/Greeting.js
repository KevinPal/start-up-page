import React, {
	Component
} from 'react';

class Greeting extends Component {
	// this will only render once and won't update for the morning or afternoon
	// just don't keep your tab open between morning and afternoon
	render() {
		var d = new Date();
		if (d.getHours() < 12) {
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
