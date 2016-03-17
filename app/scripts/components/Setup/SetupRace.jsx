var React = require('react');
var ReactDom = require('react-dom');
import CharacterStore from '../../stores/CharacterStore';
import CharacterActions from '../../actions/CharacterActions';

const SetupRace = React.createClass({

	getInitialState: function(){

		return { 
			step: 1,
			charname: CharacterStore.getCharName() 
		};
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

	_onChange: function(){
		this.setState({
		  charname: CharacterStore.getCharName()
		})
	},

	render() {

		return (
			<div className="setup">
				<img 
					src={'public/images/svgs/dwarf.svg'}
				/>
				<img 
					src={'public/images/svgs/elf.svg'}
				/>
				<img 
					src={'public/images/svgs/halfling.svg'}
				/>
				<img 
					src={'public/images/svgs/human.svg'}
				/>
				<img 
					src={'public/images/svgs/dragonborne.svg'}
				/>
				<img 
					src={'public/images/svgs/gnome.svg'}
				/>
				<img 
					src={'public/images/svgs/half-elf.svg'}
				/>
				<img 
					src={'public/images/svgs/half-orc.svg'}
				/>
				<img 
					src={'public/images/svgs/tiefling.svg'}
				/>
			</div>
		);
	}
});

export default SetupRace;