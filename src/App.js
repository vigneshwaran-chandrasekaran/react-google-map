import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { SimpleMap, Header } from './components';

function App() {
	return (
		<div className="App">
			<Header />
			<BrowserRouter>
				<Switch>
					<Route exact path="/autocomplete">
						<Header />
					</Route>
					<Route path="/google-map">
						<SimpleMap />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
