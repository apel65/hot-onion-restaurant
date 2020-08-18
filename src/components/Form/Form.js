import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Login/useAuth';
import './Form.css';
import { getDatabaseCart, clearLocalShopingCart } from '../../utilities/databaseManager';
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../CheckOutForm/CheckOutForm';

const Form = () => {
	const auth = useAuth();
    const { register, handleSubmit, errors } = useForm();
    const [shipInfo, setShipInfo] = useState(null);
    const [orderId, setOrderId] = useState(null);

	const stripePromise = loadStripe('pk_test_51HE2mnK0eA7m4lX1BfslHnkOzAUfH5GfOaqMz00pDOiePNrEETO4JZz3k5nH1zjqVsi7EtOcBvQ6rprTxH7OfgEA00GrneNwTt');

	const onSubmit = (data) => {
        setShipInfo(data);
    };
    
    const handlePlaceOrder  = (payment) => {
        const savedCart = getDatabaseCart();
		const orderDetails = {
			email: auth.user.email,
			cart: savedCart,
            shipment: shipInfo,
            payment: payment
		};

		fetch('http://localhost:4200/placeOrder', {
			method: 'POST',
			body: JSON.stringify(orderDetails),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
        .then((res) => res.json())
        .then((order) => {
            setOrderId(order._id);
            clearLocalShopingCart();
        });
    }

	return (
		<div>
			<div style={{display: shipInfo && 'none'}} className="shipmentForm">
				<h2 className="edit-deliver">Edit Delivery Details</h2>

				<form className="user-form" onSubmit={handleSubmit(onSubmit)}>
					
					<input
						name="Address1"
						ref={register({ required: true })}
						placeholder="Address"
						className="form-control"
					/>
					{errors.Address1 && <span>Address is required</span>}

					<input
						name="Address2"
						ref={register}
						placeholder="flat, suite or floor"
						className="form-control"
					/>

					<input
						name="city"
						ref={register({ required: true })}
						placeholder="City"
						className="form-control"
					/>
					{errors.city && <span>City is required</span>}

					<input
						name="businessName"
						ref={register({ required: true })}
						placeholder="Business Name"
						className="form-control"
					/>
					{errors.businessName && <span>Business Name is required</span>}

					<textarea
						name="deliveryInstructor"
						ref={register({ required: true })}
						placeholder="Delivery Instructor"
						className="form-control mt-2 bg-light"
					/>
					{errors.deliveryInstructor && (
						<span>Delivery Instructor is required</span>
					)}

					<input
						type="submit"
						value="Save & Continue"
						className="form-control bg-danger text-light"
					/>
				</form>
			</div>
			<div style={{display: shipInfo ? 'block' : 'none'}} className="shipmentPayment">
				<h3>Payment Information</h3>
				<Elements stripe={stripePromise}>
					<CheckoutForm handlePlaceOrder={handlePlaceOrder}></CheckoutForm>
				</Elements>
                <br/>
                {
                    orderId && <div>
                        <h3>Thank you for shoping with us (-_-) </h3>
                        <p>Your Order id: {orderId}</p>
                    </div>
                }
			</div>
		</div>
	);
};

export default Form;
