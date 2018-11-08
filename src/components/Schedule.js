import React, {
	Component
} from 'react';

class Information extends Component {
	fall = (
		<table className="Table">
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
					<td className="CRC"><big>9:30 AM</big><br/>College Reading and Composition<br/><big>11:20 AM</big></td>
					<td className="MPW"><big>9:30 AM</big><br/>Measuring our Physical World<br/><big>11:20 AM</big></td>
					<td className="CRC"><big>9:30 AM</big><br/>College Reading and Composition<br/><big>11:20 AM</big></td>
					<td className="MPW"><big>9:30 AM</big><br/>Measuring our Physical World<br/><big>11:20 AM</big></td>
					<td className="DSL"><big>10:30 AM</big><br/>Data Structures: Lab<br/><big>1:20 PM</big></td>
				</tr>
				<tr>
					<td className="PL"><big>1:30 PM</big><br/>Physics II: Lab<br/><big>3:20 PM</big></td>
					<td className="P"><big>1:30 PM</big><br/>Physics II <br/><big>2:45 PM</big></td>
					<td className="PD"><big>1:30 PM</big><br/>Physics II: Disc<br/><big>3:20 PM</big></td>
					<td className="P"><big>1:30 PM</big><br/>Physics II <br/><big>2:45 PM</big></td>
				</tr>
				<tr>
					<td className="DS"><big>4:30 PM</big><br/>Data Structures<br/><big>5:45 PM</big></td>
					<td> </td>
					<td className="DS"><big>4:30 PM</big><br/>Data Structures<br/><big>5:45 PM</big></td>
				</tr>
			</tbody>
		</table>
	);

	render() {
		return this.fall;
	}
}

export default Information;
