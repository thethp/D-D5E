var React = require('react');
import CharacterStore from '../../stores/CharacterStore';
import CharacterActions from '../../actions/CharacterActions';

const Stats = React.createClass({

	getInitialState: function(){

		return {
			skills: CharacterStore.getSkills()
		}
	},

	componentDidMount: function(){
		CharacterStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function(){
		CharacterStore.removeChangeListener(this._onChange);
	},

	_onChange: function(){
		this.setState({
		  skills: CharacterStore.getSkills()
		})
	},

	render() {
		let skillsArr = [];
		for(let skill in this.state.skills) {

			skillsArr.push(
				<div>
					<input
						type="checkbox"
						checked={this.state.skills[skill].proficient}
					/>
				<label>{this.state.skills[skill].display_name}</label>
				</div>
			);
		}

		return (
			<div className="skills">
				{skillsArr}
			</div>
		);
	}
});

export default Stats;
