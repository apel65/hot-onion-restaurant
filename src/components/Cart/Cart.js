import React from 'react';
import LiveCart from '../LiveCart/LiveCart';
import './Cart.css';

const Cart = (props) => {
    const existingFood = props.foods;
    
    const total = existingFood.reduce((total, fd) => total + fd.price * fd.quantity,0);

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
                {
                    existingFood.map(fd => <LiveCart food={fd} key={fd.key}></LiveCart>)
                }
            </div>
            <br/>
           <div className="cart-bottom">
                <table>
                    <tbody>
                        <tr>
                            <td>Subtotal.</td>
                            <td className="align-right">{existingFood.length} item ${formateNumber(total)}</td>
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
                <button className="place-order">Place Order</button>
            </div>
        </div>
    );
};

export default Cart;