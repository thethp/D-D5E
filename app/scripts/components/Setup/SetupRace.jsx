var React = require('react');
import { Link } from 'react-router';

const SetupRace = React.createClass({
	render() {

		return (
			<div className="setup">
				<img 
					src={'public/images/svgs/dwarf.svg'}
					onClick={this.props.handleUpdateCharRace}
					data-race='dwarf'
				/>
				<img 
					src={'public/images/svgs/elf.svg'}
					onClick={this.props.handleUpdateCharRace}
					data-race='elf'
				/>
				<img 
					src={'public/images/svgs/halfling.svg'}
					onClick={this.props.handleUpdateCharRace}
					data-race='halfling'
				/>
				<img 
					src={'public/images/svgs/human.svg'}
					onClick={this.props.handleUpdateCharRace}
					data-race='human'
				/>
				<img 
					src={'public/images/svgs/dragonborne.svg'}
					onClick={this.props.handleUpdateCharRace}
					data-race='dragonborne'
				/>
				<img 
					src={'public/images/svgs/gnome.svg'}
					onClick={this.props.handleUpdateCharRace}
					data-race='gnome'
				/>
				<img 
					src={'public/images/svgs/half-elf.svg'}
					onClick={this.props.handleUpdateCharRace}
					data-race='half-elf'
				/>
				<img 
					src={'public/images/svgs/half-orc.svg'}
					onClick={this.props.handleUpdateCharRace}
					data-race='half-orc'
				/>
				<img 
					src={'public/images/svgs/tiefling.svg'}
					onClick={this.props.handleUpdateCharRace}
					data-race='tiefling'
				/>
				<Link to="/setup/1"><button>before</button></Link>
			</div>
		);
	}
});

export default SetupRace;