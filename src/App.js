import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { SimpleMap, Header } from './components';

function App() {
	return (
		<div className="App">
			<Header />
			<SimpleMap />
		</div>
	);
}

export default App;
