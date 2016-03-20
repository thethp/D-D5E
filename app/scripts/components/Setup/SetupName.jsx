var React = require('react');
var ReactDom = require('react-dom');
import { Link } from 'react-router';
import CharacterStore from '../../stores/CharacterStore';
import CharacterActions from '../../actions/CharacterActions';

const SetupName = React.createClass({

	getInitialState: function(){

		return { 
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
				<input 
					type="text"
					placeholder="Character Name"
					name="charname"
					ref="charname"
					autoComplete="off"
					onChange={ this.handleUpdateCharName }
				/>
				<Link to="/setup/2"><button>></button></Link>
			</div>
		);
	}
});

export default SetupName;