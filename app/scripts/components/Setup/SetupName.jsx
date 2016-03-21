var React = require('react');
import { Link } from 'react-router';

const SetupName = React.createClass({
	render() {

		return (
			<div className="setup">
				<input 
					type="text"
					placeholder="Character Name"
					name="charname"
					ref="charname"
					autoComplete="off"
					onChange={ this.props.handleUpdateCharName }
				/>
				<Link to="/setup/2"><button>></button></Link>
			</div>
		);
	}
});

export default SetupName;