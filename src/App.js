import React from 'react';
import './App.css';
import LunchStore from './components/LunchStore/LunchStore';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import FoodDetail from './components/FoodDetail/FoodDetail';
import DinnerStore from './components/DinnerStore/DinnerStore';
import BreakfastStore from './components/BreakfastStore/BreakfastStore';
import Login from './components/Login/Login';
import { AuthContextProvider, PrivateRoute } from './components/Login/useAuth';
import CheckOut from './components/CheckOut/CheckOut';
import BannerSection from './components/BannerSection/BannerSection';
import HeaderTwo from './components/HeaderTwo/HeaderTwo';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';


function App() {
	
	return (
		<div className="App">
			<AuthContextProvider>
				<Router>
				<Header></Header>
				<BannerSection></BannerSection>
				<HeaderTwo></HeaderTwo>
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
						<PrivateRoute path="/checkout">
							<CheckOut></CheckOut>
						</PrivateRoute>
						<Route path="/login">
							<Login></Login>
						</Route>
						<Route path="*">
							<NotFound></NotFound>
						</Route>
					</Switch>
					<AboutUs></AboutUs>
					<Footer></Footer>
				</Router>
			</AuthContextProvider>
		</div>
	);
}

export default App;
