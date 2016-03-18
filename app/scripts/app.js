var React = require('react');
var ReactDom = require('react-dom');
import Setup from './components/Setup/Setup.jsx';

const App = React.createClass({

	render() {

		return (
			<Setup />
		);
	}
});

ReactDom.render(<App />, document.getElementById('app'));