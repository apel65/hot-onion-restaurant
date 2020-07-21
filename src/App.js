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
import DinnerStore from './components/DinnerStore/DinnerStore';
import BreakfastStore from './components/BreakfastStore/BreakfastStore';
import Login from './components/Login/Login';
import Banner from './components/Banner/Banner';
import { AuthContextProvider, PrivateRoute } from './components/Login/useAuth';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';


function App() {
	
	return (
		<div className="App">
			<AuthContextProvider>
				
				{/* <Banner></Banner> */}
				<Router>
				<Header></Header>
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
						<PrivateRoute path="/placeorder">
							<PlaceOrder></PlaceOrder>
						</PrivateRoute>
						<Route path="/login">
							<Login></Login>
						</Route>
						<Route path="*">
							<NotFound></NotFound>
						</Route>
					</Switch>
				</Router>
			</AuthContextProvider>
		</div>
	);
}

export default App;
