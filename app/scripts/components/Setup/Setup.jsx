var React = require('react');
var ReactDom = require('react-dom');
import CharacterStore from '../../stores/CharacterStore';
import CharacterActions from '../../actions/CharacterActions';

const Setup = React.createClass({

	getInitialState: function(){

		return { charname: CharacterStore.getCharName() };
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
				<h1>Welcome, {this.state.charname}...</h1>
				<input 
					type="text"
					placeholder="Character Name"
					name="charname"
					ref="charname"
					autoComplete="off"
					onChange={ this.handleUpdateCharName }
				/>
				<button>></button>
			</div>
		);
	}
});

export default Setup;