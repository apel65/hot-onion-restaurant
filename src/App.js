import React, { useState } from 'react';
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
import DinnerDetails from './components/DinnerDetails/DinnerDetails';
import BreakFastDetails from './components/BreakFastDetails/BreakFastDetails';
import Cart from './components/Cart/Cart';



function App() {

	const [cart, setCart] = useState([]);
	
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
					<Route path="/breakfastes/:breakFastKey">
						<BreakFastDetails></BreakFastDetails>
					</Route>
					<Route path="/lunches/:lunchKey">
						<LunchDetails cart={cart} setCart={setCart}></LunchDetails>
					</Route>
					<Route path="/dinners/:dinnerKey">
						<DinnerDetails></DinnerDetails>
					</Route>
					<Route path="/cart">
						<Cart></Cart>
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
