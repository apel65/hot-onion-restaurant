import React from 'react';
import './App.css';
import LunchStore from './components/LunchStore/LunchStore';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import FoodDetail from './components/FoodDetail/FoodDetail';
import Cart from './components/Cart/Cart';
import DinnerStore from './components/DinnerStore/DinnerStore';
import BreakfastStore from './components/BreakfastStore/BreakfastStore';


function App() {
	
	return (
		<div className="App">
			<Header></Header>
			<Router>
				<Switch>
					<Route path='/breakfast'>
						<BreakfastStore></BreakfastStore>
					</Route>
					<Route path='/lunch'>
						<LunchStore></LunchStore>
					</Route>
					<Route exact path='/'>
						<LunchStore></LunchStore>
					</Route>
					<Route path='/dinner'>
						<DinnerStore></DinnerStore>
					</Route>
					<Route path="/foodDetails/:foodKey">
						<FoodDetail></FoodDetail>
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
