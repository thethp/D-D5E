var React = require('react');

const Stat = React.createClass({
	render() {

		return (
			<div className="stat">
				<div className="label">{this.props.label}</div>
				<div className="mod">{this.props.mod}</div>
				<div className="val">{this.props.val}</div>
			</div>
		);
	}
});

export default Stat;