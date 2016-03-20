var React = require('react');
var ReactDom = require('react-dom');
import CharacterStore from '../../stores/CharacterStore';
import CharacterActions from '../../actions/CharacterActions';
import SetupName from './SetupName.jsx';
import SetupRace from './SetupRace.jsx';

const Setup = React.createClass({

	getInitialState: function(){

		return { 
			charName: CharacterStore.getCharName(),
			charRace: CharacterStore.getCharRace()
		};
	},

	componentDidMount: function(){
		CharacterStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function(){
		CharacterStore.removeChangeListener(this._onChange);
	},

	_onChange: function(){
		this.setState({
		  charName: CharacterStore.getCharName(),
		  charRace: CharacterStore.getCharRace()
		})
	},

	render() {
		let step = (this.props.params.step) ? this.props.params.step.toString() : "1";
		var template;

		switch(step) {
			case "1":
				template = <SetupName />;
				break;
			case "2":
				template = <SetupRace />;
				break;
			default:
				template = <SetupName />;
				break;
		}

		return (
			<div className="setup">
				<h1>Welcome, {this.state.charName}: {this.state.charRace}</h1>
				{template}
			</div>
		);
	}
});

export default Setup;