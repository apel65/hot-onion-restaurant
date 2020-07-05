import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import fakeData from '../../fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const DinnerDetails = () => {

    const {dinnerKey} = useParams();
    const dinner = fakeData.find(food => food.key === dinnerKey );
    const {img, category, price} = dinner;

    return (
        <div className="top-size">
            <Container>
                <div className="row">
                    <div className="col-6 mt-5 pt-2">
                        <h1 className="h1-size">Light { category }</h1>
                        <p className="mr-5 pr-5 pt-3 gray">Gay one the what walk then she. Demesne mention promise you justice arrived way. Amazing foods are Or and Increasing to in especially inquetude companions acceptance admiration. Outweigh it families distance wandered ye</p>
                        <h2 className="h2-size">${price}</h2>
                        <br/>
                        <a href="#" className="addBtn" type="button"><FontAwesomeIcon icon={faShoppingCart}/>  Add</a>
                    </div>
                    <div className="col-6">
                        <img src={img} className="img-fluid max-width: 100%" alt=""/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DinnerDetails;