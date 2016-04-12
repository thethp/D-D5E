var React = require('react');
import RaceConstants from '../../constants/RaceConstants';
import { Link } from 'react-router';

const SetupRace = React.createClass({
	render() {
		let races = RaceConstants.races;
		let raceicons = [];
		for(let i = 0; i < races.length; i++) {
			var race = new races[i]();
			raceicons.push(
				<img 
					src={'public/images/svgs/'+race.fileName+'.svg'}
					onClick={this.props.handleUpdateCharRace}
					key={race.fileName}
					ref='charrace'
					data-race={race.raceId}
				/>
			);
		}

		return (
			<div className="setup">
				{raceicons}
				<Link to="/setup/1"><button>before</button></Link>
			</div>
		);
	}
});

export default SetupRace;