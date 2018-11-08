import React, {
	Component
} from 'react';

class Schedule extends Component {
	fall = (
		<table className="Table">
			<thead className="Table-head">
				<tr>
					<th className="Day">Monday</th>
					<th className="Day">Tuesday</th>
					<th className="Day">Wednesday</th>
					<th className="Day">Thursday</th>
					<th className="Day">Friday</th>
				</tr>
			</thead>
			<tbody className="Table-body">
				<tr>
					<td className="Yellow"><big>9:30 AM</big><br/>College Reading and Composition<br/><big>11:20 AM</big></td>
					<td className="Cyan"><big>9:30 AM</big><br/>Measuring our Physical World<br/><big>11:20 AM</big></td>
					<td className="Yellow"><big>9:30 AM</big><br/>College Reading and Composition<br/><big>11:20 AM</big></td>
					<td className="Cyan"><big>9:30 AM</big><br/>Measuring our Physical World<br/><big>11:20 AM</big></td>
					<td className="White"><big>10:30 AM</big><br/>Data Structures: Lab<br/><big>1:20 PM</big></td>
				</tr>
				<tr>
					<td className="Red"><big>1:30 PM</big><br/>Physics II: Lab<br/><big>3:20 PM</big></td>
					<td className="Magenta"><big>1:30 PM</big><br/>Physics II <br/><big>2:45 PM</big></td>
					<td className="Green"><big>1:30 PM</big><br/>Physics II: Disc<br/><big>3:20 PM</big></td>
					<td className="Magenta"><big>1:30 PM</big><br/>Physics II <br/><big>2:45 PM</big></td>
				</tr>
				<tr>
					<td className="White"><big>4:30 PM</big><br/>Data Structures<br/><big>5:45 PM</big></td>
					<td> </td>
					<td className="White"><big>4:30 PM</big><br/>Data Structures<br/><big>5:45 PM</big></td>
				</tr>
			</tbody>
		</table>
	);

	spring = (
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
					<td className="Yellow"><big>8:30 AM</big><br/>Intro to East Asia<br/><big>9:20 AM</big></td>
					<td className="Red"><big>8:30 AM</big><br/>Biology Today Discussion<br/><big>10:20 AM</big></td>
					<td className="Yellow"><big>8:30 AM</big><br/>Intro to East Asia<br/><big>9:20 AM</big></td>
					<td></td>
					<td className="Yellow"><big>8:30 AM</big><br/>Intro to East Asia<br/><big>9:20 AM</big></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td className="Yellow"><big>10:30 AM</big><br/>Intro to East Asia Discussion<br/><big>11:20 AM</big></td>
					<td></td>
				</tr>
				<tr>
					<td className="Red"><big>12:30 PM</big><br/>Biology Today<br/><big>1:20 PM</big></td>
					<td></td>
					<td className="Red"><big>12:30 PM</big><br/>Biology Today<br/><big>1:20 PM</big></td>
					<td></td>
					<td className="Red"><big>12:30 PM</big><br/>Biology Today<br/><big>1:20 PM</big></td>
				</tr>
				<tr>
					<td className="Magenta"><big>4:30 PM</big><br/>Discrete Mathematics<br/><big>5:45 PM</big></td>
					<td className="Magenta"><big>1:30 PM</big><br/>Discrete Mathematics Lab<br/><big>4:20 PM</big></td>
					<td className="Magenta"><big>4:30 PM</big><br/>Discrete Mathematics<br/><big>5:45 PM</big></td>
					<td></td>
					<td className="Green"><big>2:30 PM</big><br/>Introduction To Philisophy Discussion<br/><big>3:20 PM</big></td>
				</tr>
				<tr>
					<td className="Green"><big>7:30 PM</big><br/>Introduction To Philosophy<br/><big>8:45 PM</big></td>
					<td></td>
					<td className="Green"><big>7:30 PM</big><br/>Introduction To Philosophy<br/><big>8:45 PM</big></td>
				</tr>
			</tbody>
		</table>
	);

	render() {
		return this.spring;
	}
}

export default Schedule;
