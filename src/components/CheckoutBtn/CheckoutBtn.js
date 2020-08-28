import React, { useState } from 'react';
import './CheckoutBtn.css';
import { Link } from 'react-router-dom';
import { getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';

const CheckoutBtn = () => {
    const [cart, setCart] = useState([]);
    const [food, setFood] = useState([]);
    console.log(cart.length)
    useEffect(() => {
        fetch('https://blooming-meadow-56189.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => setFood(data));
    }, [])

    useEffect(() => {
        const saveCart = getDatabaseCart();
        const foodKey = Object.keys(saveCart);
        if(food.length > 0){
            const existingFood = foodKey.map(existingKey => {
                const foodta = food.find(fd => fd.key === existingKey);
                foodta.quantity = saveCart[existingKey];
                return foodta;
            })
            setCart(existingFood);
        }
        
    }, [food])

    return (
        <div>
            <Link to="/checkout">
                { 
                    <button disabled = {cart.length > 0 ? false : true} className={cart.length > 0 ? 'btn-checked' : 'btn-checked cursor '} >Checkout Your Food</button>
                }
            </Link>
        </div>
    );
};

export default CheckoutBtn;