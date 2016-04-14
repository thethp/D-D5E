var React = require('react');
import CharacterStore from '../../stores/CharacterStore';
import CharacterActions from '../../actions/CharacterActions';
import RaceConstants from '../../constants/RaceConstants';
import Stat from './Stat.jsx';

const Stats = React.createClass({

	getInitialState: function(){

		return { 
			strength: CharacterStore.getStrength(),
			dexterity: CharacterStore.getDexterity(),
			constitution: CharacterStore.getConstitution(),
			intelligence: CharacterStore.getIntelligence(),
			wisdom: CharacterStore.getWisdom(),
			charisma: CharacterStore.getCharisma()
		}
	},

	componentDidMount: function(){
		CharacterStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function(){
		CharacterStore.removeChangeListener(this._onChange);
	},

	_onChange: function(){
		this.setState({
		  strength: CharacterStore.getStrength(),
			dexterity: CharacterStore.getDexterity(),
			constitution: CharacterStore.getConstitution(),
			intelligence: CharacterStore.getIntelligence(),
			wisdom: CharacterStore.getWisdom(),
			charisma: CharacterStore.getCharisma()
		})
	},

	render() {

		return (
			<div className="stats">
				<Stat
					label = {'STR'}
					mod = {CharacterStore.getStrength(true)}
					val = {this.state.strength}
				/>
				<Stat
					label = {'DEX'}
					mod = {CharacterStore.getDexterity(true)}
					val = {this.state.dexterity}
				/>
				<Stat
					label = {'CON'}
					mod = {CharacterStore.getConstitution(true)}
					val = {this.state.constitution}
				/>
				<Stat
					label = {'INT'}
					mod = {CharacterStore.getIntelligence(true)}
					val = {this.state.intelligence}
				/>
				<Stat
					label = {'WIS'}
					mod = {CharacterStore.getWisdom(true)}
					val = {this.state.wisdom}
				/>
				<Stat
					label = {'CHA'}
					mod = {CharacterStore.getCharisma(true)}
					val = {this.state.charisma}
				/>
			</div>
		);
	}
});

export default Stats;