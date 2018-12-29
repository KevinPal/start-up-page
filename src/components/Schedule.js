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
			<div className="DaySchedule">
				<div className="Day" style={day === 1 ? todayStyle:notTodayStyle}>Saturday</div>
				<div className="Red">Free</div>
			</div>
		);
		this.daySchedule[0] = (
			<div className="DaySchedule">
				<div className="Day" style={day === 1 ? todayStyle:notTodayStyle}>Sunday</div>
				<div className="Red">Free</div>
			</div>
		);
		this.daySchedule[1] = (
			<div className="DaySchedule">
				<div className="Day" style={day === 1 ? todayStyle:notTodayStyle}>Monday</div>
				<div className="Yellow"><big>8:30 AM</big><br/><span className="Course">Intro to East Asia</span><span className="Classroom">COB 116</span><br/><big>9:20 AM</big></div>
				<div ></div>
				<div className="Red"><big>12:30 PM</big><br/><span className="Course">Biology Today</span><span className="Classroom">COB2 110</span><br/><big>1:20 PM</big></div>
				<div className="Cyan"><big>3:30 PM</big><br/><span className="Course">Special Relativity</span><span className="Classroom">COB 267</span><br/><big>4:45 PM</big></div>
				<div className="Magenta"><big>4:30 PM</big><br/><span className="Course">Discrete Mathematics</span><span className="Classroom">COB 105</span><br/><big>5:45 PM</big></div>
				<div className="Green"><big>7:30 PM</big><br/><span className="Course">Introduction to Philosophy</span><span className="Classroom">COB 113</span><br/><big>8:45 PM</big></div>
			</div>
		);

		this.daySchedule[2] = (
			<div className="DaySchedule">
				<div className="Day" style={day === 2 ? todayStyle:notTodayStyle}>Tuesday</div>
				<div className="Red"><big>8:30 AM</big><br/><span className="Course">Biology Today Discussion</span><span className="Classroom">COB 266</span><br/><big>10:20 AM</big></div>
				<div ></div>
				<div ></div>
				<div ></div>
				<div className="Magenta"><big>1:30 PM</big><br/><span className="Course">Discrete Mathematics Lab</span><span className="Classroom">SEB 138</span><br/><big>4:20 PM</big></div>
			</div>
		);

		this.daySchedule[3] = (
			<div className="DaySchedule">
				<div className="Day" style={day === 3 ? todayStyle:notTodayStyle}>Wednesday</div>
				<div className="Yellow"><big>8:30 AM</big><br/><span className="Course">Intro to East Asia</span><span className="Classroom">COB 116</span><br/><big>9:20 AM</big></div>
				<div className="Yellow"><big>10:30 AM</big><br/><span className="Course">Intro to East Asia Discussion</span><span className="Classroom">COB 113</span><br/><big>11:20 AM</big></div>
				<div className="Red"><big>12:30 PM</big><br/><span className="Course">Biology Today</span><span className="Classroom">COB2 110</span><br/><big>1:20 PM</big></div>
				<div className="Cyan"><big>3:30 PM</big><br/><span className="Course">Special Relativity</span><span className="Classroom">COB 267</span><br/><big>4:45 PM</big></div>
				<div className="Magenta"><big>4:30 PM</big><br/><span className="Course">Discrete Mathematics</span><span className="Classroom">COB 105</span><br/><big>5:45 PM</big></div>
				<div className="Green"><big>7:30 PM</big><br/><span className="Course">Introduction to Philosophy</span><span className="Classroom">COB 113</span><br/><big>8:45 PM</big></div>
			</div>
		);
		this.daySchedule[4] = (
			<div className="DaySchedule">
				<div className="Day" style={day === 4 ? todayStyle:notTodayStyle}>Thursday</div>
				<div ></div>
				<div ></div>
				<div ></div>
				<div ></div>
				<div ></div>
				<div ></div>
			</div>
		);
		this.daySchedule[5] = (
			<div className="DaySchedule">
				<div className="Day" style={day === 5 ? todayStyle:notTodayStyle}>Friday</div>
				<div className = "Yellow" > <big>8:30 AM</big><br/><span className="Course">Intro to East Asia</span><span className="Classroom"> COB 116 </span><br/> <big>9:20 AM</big></div>
				<div></div>
				<div className = "Red"><big>12:30 PM</big><br/><span className="Course">Biology Today</span><span className="Classroom">COB2 110</span><br/><big>1:20 PM</big></div>
				<div className = "Cyan"><big>1:30 PM</big><br/><span className="Course">Special Relativity Discussion</span><span className="Classroom">COB 267</span><br/><big>2:20 PM</big></div>
				<div className = "Green" > <big>2:30 PM</big><br/><span className="Course">Introduction to Philosophy Discussion</span><span className="Classroom">COB 127</span><br/><big>3:20 PM</big></div>
				<div></div>
			</div>
		);
		this.sch = (
			<div className="FullSchedule">
				<div>{this.daySchedule[1]}</div>
				<div>{this.daySchedule[2]}</div>
				<div>{this.daySchedule[3]}</div>
				<div>{this.daySchedule[4]}</div>
				<div>{this.daySchedule[5]}</div>
			</div>
		);
		if (this.props.day === undefined) {
			return this.sch;
		} else {
			if(this.props.day <= 5 && this.props.day >=1){
				return this.daySchedule[this.props.day];
			} else {
				return (<div></div>);
			}
		}
	}
}
export default Schedule;
