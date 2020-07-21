import React from 'react';
import logo from "../../Image/logo2.png";
import './Header.css';
import { useAuth } from '../Login/useAuth';
import { Router, Route, Link } from 'react-router-dom';
import PlaceOrder from '../PlaceOrder/PlaceOrder';


const Header = () => {
    const auth = useAuth();    
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                <a className="navbar-brand" href="/">
                <img src={logo} alt=""/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="ml-auto navbar-nav">
                        {/* <button>Cart</button> */}

                        
                        <Link to="/placeorder">
                        Cart
                        </Link>
                        <a className="nav-item nav-link" href="/login">Login</a>
                        {
                            auth.user ? <span>{auth.user.name}</span>:
                            <a href="/login">Sign Up</a>
                        }
                        </div>
                        
                    </div>
                </div>
            </nav>

            <nav className="second-nav">
                <a href="/breakfast">Breakfast</a>
                <a href="/lunch">Lunch</a>
                <a href="/dinner">Dinner</a>
            </nav>

        </div>
    );
};

export default Header;