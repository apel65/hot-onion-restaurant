import React, { useEffect } from 'react';
import logo from "../../Image/logo2.png";
import './Header.css';
import { useAuth } from '../Login/useAuth';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { getDatabaseCart } from '../../utilities/databaseManager';
import { useState } from 'react';

const Header = () => {
    const auth = useAuth();
    const [navCart, setNavCart] = useState([]);
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4200/foods')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])

    useEffect(() => {
        const saveCart = getDatabaseCart();
        const foodKeys = Object.keys(saveCart);
        if(foods.length > 0){
            const existingFood = foodKeys.map(existingKey => {
                const food = foods.find(fd => fd.key === existingKey);
                food.quantity = saveCart[existingKey];
                return food;
            })
            setNavCart(existingFood);
        } 
    },[foods])
    
    const foodQuantity = navCart.reduce((totalQuantity, fd) => totalQuantity + fd.quantity, 0);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt=""/>
                </a>
                    <div className="ml-auto">
                        <ul className="list">
                            <li>
                                <Link to="/checkout">
                                <button disabled = {navCart.length > 0 ? false : true} type="button" className="btn btn-light">
                                <FontAwesomeIcon icon={faCartPlus}/> <span className="badge badge-light">{foodQuantity}</span>
                                <span className="sr-only">unread messages</span>
                                </button>
                                </Link>
                            </li>
                            <li>
                                {
                                    auth.user ? <span>{auth.user.name}</span>:
                                    <a className="loginBtn" href="/login">Login</a>
                                }
                            </li>
                            <li>
                                {
                                    auth.user ? <button className="signUpBtn bg-danger" onClick={auth.signOut}>Sign Up</button>:
                                    <a className="signInBtn bg-danger" href="/login">Sign In</a>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 
        </div>
    );
};

export default Header;