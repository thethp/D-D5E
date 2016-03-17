var React = require('react');
var ReactDom = require('react-dom');

const Setup = React.createClass({

	render() {

		return (
			<div className="setup">
				<h1>Welcome, traveler...</h1>
				<input 
					type="text"
					placeholder="Character Name"
					name="charname"
					ref="charname"
					autoComplete="off"
				/>
				<button>></button>
			</div>
		);
	}
});

export default Setup;