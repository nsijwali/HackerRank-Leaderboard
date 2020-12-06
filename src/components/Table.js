import React, { Component } from 'react';
import { usersJSON } from '../data';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON,
		};
	}

	componentWillReceiveProps() {}

	// complete the comparators
	compareByAge(a, b) {}

	compareByName(a, b) {}

	compareByPoints(a, b) {}

	compareByRank(a, b) {}

	render() {
		return (
			<div>
				<table className='table table-striped'>
					<thead>
						<tr key='head'>
							<th>Age</th>
							<th>Name</th>
							<th>Points</th>
							<th>Rank</th>
						</tr>
					</thead>
					<tbody>
						{this.state.users.map(({ age, name, points, rank }) => (
							<tr>
								<td>{age}</td>
								<td>{name}</td>
								<td>{points}</td>
								<td>{rank}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}
