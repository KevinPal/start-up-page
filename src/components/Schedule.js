import React, {
	Component
} from 'react';

class Schedule extends Component {

	getDaySchedule(i) {

	}

	render() {
		const todayStyle = {
			color: '#f92672',
		};
		const notTodayStyle = {
			color: '#66d9ef',
		};
		var day = new Date().getDay();
		this.daySchedule = [];
		this.daySchedule[6] = (
			<table className="DaySchedule">
			<thead>
				<tr>
					<th className="Day" style={day === 1 ? todayStyle:notTodayStyle}>Saturday</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="Red">Free</td>
				</tr>
			</tbody>
		</table>
		);
		this.daySchedule[0] = (
			<table className="DaySchedule">
			<thead>
				<tr>
					<th className="Day" style={day === 1 ? todayStyle:notTodayStyle}>Sunday</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="Red">Free</td>
				</tr>
			</tbody>
		</table>
		);
		this.daySchedule[1] = (
			<table className="DaySchedule">
			<thead>
				<tr>
					<th className="Day" style={day === 1 ? todayStyle:notTodayStyle}>Monday</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="Yellow"><big>8:30 AM</big><br/><span className="Course">Intro to East Asia</span><span className="Classroom">COB 116</span><br/><big>9:20 AM</big></td>
				</tr>
				<tr>
					<td></td>
				</tr>
				<tr>
					<td className="Red"><big>12:30 PM</big><br/><span className="Course">Biology Today</span><span className="Classroom">COB2 110</span><br/><big>1:20 PM</big></td>
				</tr>
				<tr>
					<td className="Cyan"><big>3:30 PM</big><br/><span className="Course">Special Relativity</span><span className="Classroom">COB 267</span><br/><big>4:45 PM</big></td>
				</tr>
				<tr>
					<td className="Magenta"><big>4:30 PM</big><br/><span className="Course">Discrete Mathematics</span><span className="Classroom">COB 105</span><br/><big>5:45 PM</big></td>
				</tr>
				<tr>
					<td className="Green"><big>7:30 PM</big><br/><span className="Course">Introduction to Philosophy</span><span className="Classroom">COB 113</span><br/><big>8:45 PM</big></td>
				</tr>
			</tbody>
		</table>
		);

		this.daySchedule[2] = (
			<table className="DaySchedule">
			<thead>
				<tr>
					<th className="Day" style={day === 2 ? todayStyle:notTodayStyle}>Tuesday</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="Red"><big>8:30 AM</big><br/><span className="Course">Biology Today Discussion</span><span className="Classroom">COB 266</span><br/><big>10:20 AM</big></td>
				</tr>
				<tr>
					<td></td>
				</tr>
				<tr>
					<td></td>
				</tr>
				<tr>
					<td></td>
				</tr>
				<tr>
					<td className="Magenta"><big>1:30 PM</big><br/><span className="Course">Discrete Mathematics Lab</span><span className="Classroom">SEB 138</span><br/><big>4:20 PM</big></td>
				</tr>
				<tr>
				</tr>
			</tbody>
		</table>
		);

		this.daySchedule[3] = (
			<table className="DaySchedule">
			<thead>
				<tr>
					<th className="Day" style={day === 3 ? todayStyle:notTodayStyle}>Wednesday</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="Yellow"><big>8:30 AM</big><br/><span className="Course">Intro to East Asia</span><span className="Classroom">COB 116</span><br/><big>9:20 AM</big></td>
				</tr>
				<tr>
					<td className="Yellow"><big>10:30 AM</big><br/><span className="Course">Intro to East Asia Discussion</span><span className="Classroom">COB 113</span><br/><big>11:20 AM</big></td>
				</tr>
				<tr>
					<td className="Red"><big>12:30 PM</big><br/><span className="Course">Biology Today</span><span className="Classroom">COB2 110</span><br/><big>1:20 PM</big></td>
				</tr>
				<tr>
					<td className="Cyan"><big>3:30 PM</big><br/><span className="Course">Special Relativity</span><span className="Classroom">COB 267</span><br/><big>4:45 PM</big></td>
				</tr>
				<tr>
					<td className="Magenta"><big>4:30 PM</big><br/><span className="Course">Discrete Mathematics</span><span className="Classroom">COB 105</span><br/><big>5:45 PM</big></td>
				</tr>
				<tr>
					<td className="Green"><big>7:30 PM</big><br/><span className="Course">Introduction to Philosophy</span><span className="Classroom">COB 113</span><br/><big>8:45 PM</big></td>
				</tr>
			</tbody>
		</table>
		);
		this.daySchedule[4] = (
			<table className="DaySchedule">
			<thead>
				<tr>
					<th className="Day" style={day === 4 ? todayStyle:notTodayStyle}>Thursday</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td></td>
				</tr>
				<tr>
					<td></td>
				</tr>
				<tr>
					<td></td>
				</tr>
				<tr>
					<td></td>
				</tr>
				<tr>
					<td></td>
				</tr>
				<tr>
					<td></td>
				</tr>
			</tbody>
			</table>
		);
		this.daySchedule[5] = (
			<table className="DaySchedule">
			<thead>
				<tr>
					<th className="Day" style={day === 5 ? todayStyle:notTodayStyle}>Friday</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="Yellow"><big>8:30 AM</big><br/><span className="Course">Intro to East Asia</span><span className="Classroom">COB 116</span><br/><big>9:20 AM</big></td>
				</tr>
				<tr>
					<td></td>
				</tr>
				<tr>
					<td className="Red"><big>12:30 PM</big><br/><span className="Course">Biology Today</span><span className="Classroom">COB2 110</span><br/><big>1:20 PM</big></td>
				</tr>
				<tr>
					<td className="Cyan"><big>1:30 PM</big><br/><span className="Course">Special Relativity Discussion</span><span className="Classroom">COB 267</span><br/><big>2:20 PM</big></td>
				</tr>
				<tr>
					<td className="Green"><big>2:30 PM</big><br/><span className="Course">Introduction to Philosophy Discussion</span><span className="Classroom">COB 127</span><br/><big>3:20 PM</big></td>
				</tr>
				<tr>
					<td></td>
				</tr>
			</tbody>
		</table>
		);
		this.sch = (
			<table className="FullSchedule">
					<tr>
						<td>{this.daySchedule[1]}</td>
						<td>{this.daySchedule[2]}</td>
						<td>{this.daySchedule[3]}</td>
						<td>{this.daySchedule[4]}</td>
						<td>{this.daySchedule[5]}</td>
					</tr>
			</table>
		);
		if (this.props.day === undefined) {
			return this.sch;
		} else {
			return this.daySchedule[this.props.day];
		}
	}
}

export default Schedule;
