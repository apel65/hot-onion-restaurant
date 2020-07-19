import React from 'react';
import './Lunch.css';
import { Link } from 'react-router-dom';

const Lunch =(props) => {
    const {name, img, price, key} = props.lunch;
    
    return (
        <div>
            <div className="lunch-container container">
            <Link to={"/foodDetails/"+key}>
                <div className="col-md-4 float-left align-items">
                    <img className="img-fluid" src={img} alt=""/>
                    <h6>{name}</h6>
                    <p>How we dream about our fututre</p>
                    <h5>${price}</h5>
                </div>
            </Link>
            </div>
        </div>
    );
};

export default Lunch;