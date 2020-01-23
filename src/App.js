import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { SimpleMap, Header, AutoComplete } from './components';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/autocomplete">
						<AutoComplete />
					</Route>
					<Route path="/google-map">
						<SimpleMap />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
