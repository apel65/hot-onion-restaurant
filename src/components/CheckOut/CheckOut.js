import React from 'react';
import { useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Form from '../Form/Form';
import './CheckOut.css';

const CheckOut = () => {
    const [cart, setCart] = useState([]);
    const [foods, setFoods] = useState([]);
    
    useEffect(() => {
        fetch('https://blooming-meadow-56189.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => setFoods(data));
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
            setCart(existingFood);
        }
    },[foods])

    return (
        <div className="container margin-top">
           <div className="row align-items-center">
                <div className="form-container col-md-6">
                    <Form></Form>
                </div>
                <div className="cart-container col-md-6">
                  <div className="ml-5 pl-5">
                        {
                        <Cart cart={cart}></Cart>
                        }
                  </div>
                </div>

           </div>
        </div>
    );
};

export default CheckOut;
