import React from 'react';
import { useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import { useState } from 'react';
import Cart from '../Cart/Cart';


const PlaceOrder = () => {
    
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const saveCart = getDatabaseCart();
        const foodKeys = Object.keys(saveCart);
        const existingFood = foodKeys.map(existingKey => {
            const food = fakeData.find(fd => fd.key === existingKey);
            food.quantity = saveCart[existingKey];
            return food;
        })
        setFoods(existingFood);
    },[])

    return (
        <div className="container">
           <div className="row align-items-center">
                <div className="form-container col-md-6">
                    <h1>This is and form container</h1>
                </div>

                <div className="cart-container col-md-6 mt-5">
                   {
                     <Cart foods={foods}></Cart>
                   }
                </div>
           </div>
        </div>
    );
};

export default PlaceOrder;
