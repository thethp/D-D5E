var React = require('react');
var ReactDom = require('react-dom');

const App = React.createClass({

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

ReactDom.render(<App />, document.getElementById('app'));