import React from 'react';
import './App.css';
import Header from './components/Header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LunchStore from './components/LunchStore/LunchStore';
import NotFound from './components/NotFound/NotFound';
import DinnerStore from './components/DinnerStore/DinnerStore';
import BreakFastStore from './components/BreakFastStore/BreakFastStore';
import LunchDetails from './components/LunchDetails/LunchDetails';


function App() {
	
	return (
		<div className="App">
			<Header></Header>
			<Router>
				<Switch>
					<Route path="/breakfast">
						<BreakFastStore></BreakFastStore>
					</Route>
					<Route path="/lunch">
						<LunchStore></LunchStore>
					</Route>
					<Route exact path="/">
						<LunchStore></LunchStore>
					</Route>
					<Route path="/dinner">
						<DinnerStore></DinnerStore>
					</Route>
					<Route path="/lunches/:lunchKey">
						<LunchDetails></LunchDetails>
					</Route>
					<Route path="*">
						<NotFound></NotFound>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
