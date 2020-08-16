import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Login/useAuth';
import './Form.css';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';

const Form = () => {
    const auth = useAuth();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(auth.user.email);
        const savedCart = getDatabaseCart();
        const cartDetails = {email: auth.user.email, cart:savedCart};

        fetch('http://localhost:4200/placeOrder', {
            method: 'POST',
            body: JSON.stringify(cartDetails),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log('Order placed', data);
            alert('Successfully placed your order with userId: ', data._id);
            processOrder();
        })
    };

    return (
       <div>
            <h2 className="edit-deliver">Edit Delivery Details</h2>

            <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
                
                <input name="name" defaultValue={auth.user.name} ref={register({ required: true })} placeholder="Name" className="form-control"/>
                {errors.name && <span>name is required</span>}
                
                <input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder="Email" className="form-control"/>
                {errors.email && <span>email is required</span>}

                <input name="Address1" ref={register({ required: true })} placeholder="Address" className="form-control"/>
                {errors.Address1 && <span>Address is required</span>}

                <input name="Address2" ref={register} placeholder="flat, suite or floor" className="form-control"/>

                <input name="city" ref={register({ required: true })} placeholder="City" className="form-control"/>
                {errors.city && <span>City is required</span>}

                <input name="businessName" ref={register({ required: true })} placeholder="Business Name" className="form-control"/>
                {errors.businessName && <span>Business Name is required</span>}

                <input name="deliveryInstructor" ref={register({ required: true })} placeholder="Delivery Instructor" className="form-control"/>
                {errors.deliveryInstructor && <span>Delivery Instructor is required</span>}

                <input type="submit" value="Save & Continue" className="form-control bg-danger text-light"/>
            </form>
      </div>
    ); 
};

export default Form;