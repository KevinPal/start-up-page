import React, {
	Component
} from 'react';

class Information extends Component {
	// this will only render once and won't update for the morning or afternoon
	// just don't keep your tab open between morning and afternoon
	render() {
		return (
			<table className="Information">
				<tr>
					<th>Monday</th>
					<th>Tuesday</th>
					<th>Wednesday</th>
					<th>Thursday</th>
					<th>Friday</th>
					<th>Saturday</th>
					<th>Sunday</th>
				</tr>
				<tr>
					<td>Writing </td>
					<td>Spark</td>
					<td>Writing</td>
					<td>Spark</td>
				</tr>
			</table>
		);
	}
}

export default Information;
