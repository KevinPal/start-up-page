import React, {
	Component
} from 'react';

class Information extends Component {
	// this will only render once and won't update for the morning or afternoon
	// just don't keep your tab open between morning and afternoon
	render() {
		return (
			<table class="table table-bordered table-hover table-condensed">
				<thead>
					<tr>
						<th className="Day">Monday</th>
						<th className="Day">Tuesday</th>
						<th className="Day">Wednesday</th>
						<th className="Day">Thursday</th>
						<th className="Day">Friday</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="CRC">9:30 AM College Reading and Composition 11:20 AM</td>
						<td className="MPW">9:30 AM Measuring our Physical World 11:20 AM</td>
						<td className="CRC">9:30 AM College Reading and Composition 11:20 AM</td>
						<td className="MPW">9:30 AM Measuring our Physical World 11:20 AM</td>
					</tr>
					<tr>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
						<td className="DSL">10:30 AM Data Structures: Lab 1:20 PM</td>
					</tr>
					<tr>
						<td className="PL">1:30 PM Physics II: Lab 3:20 PM</td>
						<td className="P">1:30 PM Physics II 2:45 PM</td>
						<td className="PD">1:30 PM Physics II: Disc 3:20 PM</td>
						<td className="P">1:30 PM Physics II 2:45 PM</td>
					</tr>
					<tr>
						<td className="DS">4:30 PM Data Structures 5:45 PM</td>
						<td> </td>
						<td className="DS">4:30 PM Data Structures 5:45 PM</td>
					</tr>
				</tbody>
			</table>
		);
	}
}

export default Information;
