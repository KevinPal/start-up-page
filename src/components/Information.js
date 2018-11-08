import React, {
	Component
} from 'react';

class Information extends Component {
	// this will only render once and won't update for the morning or afternoon
	// just don't keep your tab open between morning and afternoon
	render() {
		return (
			<table class="table table-bordered table-hover table-condensed">
<thead><tr>
<th title="Field #3">Monday</th>
<th title="Field #4">Tuesday</th>
<th title="Field #5">Wednesday</th>
<th title="Field #6">Thursday</th>
<th title="Field #7">Friday</th>
</tr></thead>
<tbody><tr>
<td>9:30 AM College Reading and Composition 11:20 AM</td>
<td>9:30 AM Measuring our Physical World 11:20 AM</td>
<td>9:30 AM College Reading and Composition 11:20 AM</td>
<td>9:30 AM Measuring our Physical World 11:20 AM</td>
<td> </td>
</tr>
<tr>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td>10:30 AM Data Structures: Lab 1:20 PM</td>
</tr>
<tr>
<td>1:30 PM Physics II: Lab 3:20 PM</td>
<td>1:30 PM Physics II 2:45 PM</td>
<td>1:30 PM Physics II: Disc 3:20 PM</td>
<td>1:30 PM Physics II 2:45 PM</td>
<td> </td>
</tr>
<tr>
<td>4:30 PM Data Structures 5:45 PM</td>
<td> </td>
<td>4:30 PM Data Structures 5:45 PM</td>
<td> </td>
<td> </td>
</tr>
</tbody></table>
		);
	}
}

export default Information;
