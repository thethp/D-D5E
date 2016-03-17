var React = require('react');
var ReactDom = require('react-dom');
import SetupRace from './components/setup/SetupRace.jsx';

const App = React.createClass({

	render() {

		return (
			<SetupRace />
		);
	}
});

ReactDom.render(<App />, document.getElementById('app'));