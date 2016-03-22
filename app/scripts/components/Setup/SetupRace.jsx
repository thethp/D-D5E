var React = require('react');
import AppConstants from '../../constants/AppConstants';
import { Link } from 'react-router';

const SetupRace = React.createClass({
	render() {
		let races = AppConstants.races;
		let raceicons = [];
		for(let i = 0; i < races.length; i++) {
			raceicons.push(
				<img 
					src={'public/images/svgs/'+races[i]+'.svg'}
					onClick={this.props.handleUpdateCharRace}
					key={races[i]}
					ref='charrace'
					data-race={races[i]}
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