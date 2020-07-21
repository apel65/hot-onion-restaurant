import React from 'react';
import './CheckoutBtn.css';
import { Link } from 'react-router-dom';

const CheckoutBtn = () => {
    return (
        <div>
            <Link to="/checkout">
                <button className="check-btn">Checkout Your Food</button>
            </Link>
        </div>
    );
};

export default CheckoutBtn;