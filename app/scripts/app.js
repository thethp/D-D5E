import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createHashHistory } from 'history';
import Setup from './components/Setup/Setup.jsx';

const App = React.createClass({

	render() {

		return (
			<h1>Welcome!</h1>
		);
	}
});

export default App;

const Routes = (
	<Router history={createHashHistory({ queryKey: false })}>
    <Route path="/" component={App}/>
    <Route path="/setup" component={Setup}/>
  </Router>
);

ReactDom.render(Routes, document.getElementById('app'));