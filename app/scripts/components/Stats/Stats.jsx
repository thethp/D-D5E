var React = require('react');
import CharacterStore from '../../stores/CharacterStore';
import CharacterActions from '../../actions/CharacterActions';
import RaceConstants from '../../constants/RaceConstants';

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
				<div className="stat">{this.state.strength}</div>
				<div className="stat">{this.state.dexterity}</div>
				<div className="stat">{this.state.constitution}</div>
				<div className="stat">{this.state.intelligence}</div>
				<div className="stat">{this.state.wisdom}</div>
				<div className="stat">{this.state.charisma}</div>
			</div>
		);
	}
});

export default Stats;