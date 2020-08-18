import React from 'react';
import LiveCart from '../LiveCart/LiveCart';
import './Cart.css';
import { Link } from 'react-router-dom';
import FullPageLoader from '../FullPageLoader/FullPageLoader';

const Cart = (props) => {

    const existingFood = props.cart;
    
    const total = existingFood.reduce((total, fd) => total + fd.price * fd.quantity, 0);
    const foodQuantity = existingFood.reduce((totalQuantity, fd) => totalQuantity + fd.quantity, 0);

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
            <div className="cart-top">
                <p>From <strong>Shayra Restaura GPR</strong>
                <br/>
                <small>Ariving in 1-30 min</small>
                <br/>
                <small>109 Rd No 9</small>
                </p>
           </div>
           <div className="cart-middle">
                { existingFood.length > 0 ?
                    existingFood.map(fd => <LiveCart food={fd} key={fd.key}></LiveCart>) :
                    <FullPageLoader></FullPageLoader>
                }
            </div>
            <br/>
           <div className="cart-bottom">
                <table>
                    <tbody>
                        <tr>
                            <td>Subtotal.</td>
                            <td className="align-right">{foodQuantity} item ${formateNumber(total)}</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td className="align-right">${formateNumber(tax)}</td>
                        </tr>
                        <tr>
                            <td>Delivery fee</td>
                            <td className="align-right">${deliveryFee}</td>
                        </tr>
                        <tr>
                            <td><big>Total:</big></td>
                            <td className="align-right">${formateNumber(grandTotal)}</td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/placeOrder">
                    { 
                        <button className="place-order">Place Order</button>
                    }
                </Link>
            </div>
        </div>
    );
};

export default Cart;