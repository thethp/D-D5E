import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createHashHistory } from 'history';
import Setup from './components/Setup/Setup.jsx';
import Stats from './components/Stats/Stats.jsx';
import Skills from './components/Skills/Skills.jsx';

const App = React.createClass({

	render() {

		return (
			<div>
				{this.props.children}
				<Skills />
				<footer>
					<Stats />
				</footer>
			</div>
		);
	}
});

export default App;

const Routes = (
	<Router history={createHashHistory({ queryKey: false })}>
    <Route path="/" component={App}>
    	<Route path="/setup" component={Setup}/>
    	<Route path="/setup/:step" component={Setup}/>
    </Route>
  </Router>
);

ReactDom.render(Routes, document.getElementById('app'));