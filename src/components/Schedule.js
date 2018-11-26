import React, {
	Component
} from 'react';

class Schedule extends Component {
	key(season, year) {
		return season + 4 * year;
	}
	render() {
		const todayStyle = {
			color: '#f92672',
		};
		const notTodayStyle = {
			color: '#66d9ef',
		};
		var day = new Date().getDay();
		this.sch = [];
		this.sch[this.key(2, 2018)] = (
			<table className="Table">
			<thead className="Table-head">
				<tr>
					<th className="Day" style={day === 1 ? todayStyle:notTodayStyle}>Monday</th>
					<th className="Day" style={day === 2 ? todayStyle:notTodayStyle}>Tuesday</th>
					<th className="Day" style={day === 3 ? todayStyle:notTodayStyle}>Wednesday</th>
					<th className="Day" style={day === 4 ? todayStyle:notTodayStyle}>Thursday</th>
					<th className="Day" style={day === 5 ? todayStyle:notTodayStyle}>Friday</th>
				</tr>
			</thead>
			<tbody>
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

		this.sch[this.key(0, 2019)] = (
			<table className="Table">
			<thead>
				<tr>
					<th className="Day" style={day === 1 ? todayStyle:notTodayStyle}>Monday</th>
					<th className="Day" style={day === 2 ? todayStyle:notTodayStyle}>Tuesday</th>
					<th className="Day" style={day === 3 ? todayStyle:notTodayStyle}>Wednesday</th>
					<th className="Day" style={day === 4 ? todayStyle:notTodayStyle}>Thursday</th>
					<th className="Day" style={day === 5 ? todayStyle:notTodayStyle}>Friday</th>
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

		var year = new Date().getFullYear();
		var season = -1;
		var month = new Date().getMonth();
		var date = new Date().getDate();
		if (month === 11) {
			if (date > 18) {
				season = 3;
			}
		} else if (month > 7) {
			season = 2;
		} else if (month === 7) {
			if (date >= 15) {
				season = 2;
			} else {
				season = 1;
			}
		} else if (month > 4) {
			season = 1;
		} else if (month === 4) {
			if (date >= 21) {
				season = 1;
			} else {
				season = 0;
			}
		} else if (month >= 0) {
			season = 0;
		} else if (month === 0) {
			if (date > 15) {
				season = 0;
			} else {
				season = 3;
			}
		} else {
			season = 3;
		}
		//return this.spring;
		return this.sch[this.key(season, year)];
	}
}

export default Schedule;
