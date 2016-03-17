var React = require('react');
var ReactDom = require('react-dom');

const Setup = React.createClass({

	render() {

		return (
			<div>
				<h1>Welcome, traveler...</h1>
				<input 
					type="text"
					placeholder="Character Name"
					name="charname"
					ref="charname"
					autoComplete="off"
				/>
			</div>
		);
	}
});

export default Setup;