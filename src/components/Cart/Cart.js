import React, { useState, useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import './Cart.css';


const Cart = () => {
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

   const total = foods.reduce((total, fd) => total + fd.price * fd.quantity,0);
   const tax = total/10;
   let deliveryFee = 0;
   
   if(total > 88){
       deliveryFee = 0;
   }
   else if (total >= 1){
       deliveryFee = 2;
   }

   const grandTotal = (total + tax + deliveryFee);
    const formateNumber = (num)=> {
        const precision = num.toFixed();
        return Number(precision);
    }
    return (
       <div>
           <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h2>This is Delivery inforamation</h2>
                </div>

                    <div className="col-md-6 margin-top">
                        <div className="cart-shape">
                        <p>From <strong>Gulshan Plaza Restaura GPR</strong>
                        <br/>
                        <small>Ariving in 2-30 min</small>
                        <br/>
                        <small>107 Rd No 8</small>
                        </p>
                            {
                                foods.map(fd => <table key={fd.key}>
                                    <tr>
                                        <td><img src={fd.img} alt=""/></td>
                                        <td>
                                            <strong>{fd.name}</strong>
                                            <br/>
                                            <h6 className="text-danger">${fd.price}</h6>
                                        </td>
                                        <td>
                                            <strong>Qty: {fd.quantity}</strong>
                                        </td>
                                    </tr>
                                </table>)
                            }
                        </div>
                        <table>
                            <tr>
                                <td>Subtotal: {foods.length} item ${formateNumber(total)}</td>
                            </tr>
                            <tr>
                                <td>Tax: ${formateNumber(tax)}</td>
                            </tr>
                            <tr>
                                <td>Delivery fee: ${deliveryFee}</td>
                            </tr>
                                <td><big>Total: ${formateNumber(grandTotal)}</big></td>
                        </table>
                        <button className="place-order">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;