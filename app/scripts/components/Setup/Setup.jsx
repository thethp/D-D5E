var React = require('react');
import CharacterStore from '../../stores/CharacterStore';
import CharacterActions from '../../actions/CharacterActions';
import RaceConstants from '../../constants/RaceConstants';
import SetupName from './SetupName.jsx';
import SetupRace from './SetupRace.jsx';

const Setup = React.createClass({

	getInitialState: function(){

		return { 
			charName: CharacterStore.getCharName(),
			charRace: CharacterStore.getCharRace()
		}
	},

	componentDidMount: function(){
		CharacterStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function(){
		CharacterStore.removeChangeListener(this._onChange);
	},

	handleUpdateCharName: function(_ev){
	    CharacterActions.updateCharName(_ev.target.value);
	},

	handleUpdateCharRace: function(_ev){
		CharacterActions.updateCharRace(RaceConstants.races[_ev.target.getAttribute('data-race')]);
	},

	_onChange: function(){
		this.setState({
		  charName: CharacterStore.getCharName(),
		  charRace: CharacterStore.getCharRace()
		})
	},

	render() {
		let step = (this.props.params && this.props.params.step) ? this.props.params.step.toString() : "1";
		var template;

		switch(step) {
			case "1":
				template = <SetupName handleUpdateCharName={this.handleUpdateCharName} />;
				break;
			case "2":
				template = <SetupRace handleUpdateCharRace={this.handleUpdateCharRace} />;
				break;
			default:
				template = <SetupName handleUpdateCharName={this.handleUpdateCharName} />;
				break;
		}

		return (
			<div className="setup">
				<h1>Welcome, {this.state.charName}: {this.state.charRace.raceName}</h1>
				{template}
			</div>
		);
	}
});

export default Setup;