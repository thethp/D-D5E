var React = require('react');
var ReactDom = require('react-dom');
import CharacterStore from '../../stores/CharacterStore';
import CharacterActions from '../../actions/CharacterActions';

const SetupRace = React.createClass({

	getInitialState: function(){

		return { 
			charRace: CharacterStore.getCharRace() 
		};
	},

	componentDidMount: function(){
		CharacterStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function(){
		CharacterStore.removeChangeListener(this._onChange);
	},

	handleUpdateRace: function(_ev){
		CharacterActions.updateCharRace(_ev.target.getAttribute('data-race'));
	},

	_onChange: function(){
		this.setState({
		  charRace: CharacterStore.getCharRace()
		})
	},

	render() {

		return (
			<div className="setup">
				<img 
					src={'public/images/svgs/dwarf.svg'}
					onClick={this.handleUpdateRace}
					data-race='dwarf'
				/>
				<img 
					src={'public/images/svgs/elf.svg'}
					onClick={this.handleUpdateRace}
					data-race='elf'
				/>
				<img 
					src={'public/images/svgs/halfling.svg'}
					onClick={this.handleUpdateRace}
					data-race='halfling'
				/>
				<img 
					src={'public/images/svgs/human.svg'}
					onClick={this.handleUpdateRace}
					data-race='human'
				/>
				<img 
					src={'public/images/svgs/dragonborne.svg'}
					onClick={this.handleUpdateRace}
					data-race='dragonborne'
				/>
				<img 
					src={'public/images/svgs/gnome.svg'}
					onClick={this.handleUpdateRace}
					data-race='gnome'
				/>
				<img 
					src={'public/images/svgs/half-elf.svg'}
					onClick={this.handleUpdateRace}
					data-race='half-elf'
				/>
				<img 
					src={'public/images/svgs/half-orc.svg'}
					onClick={this.handleUpdateRace}
					data-race='half-orc'
				/>
				<img 
					src={'public/images/svgs/tiefling.svg'}
					onClick={this.handleUpdateRace}
					data-race='tiefling'
				/>
			</div>
		);
	}
});

export default SetupRace;