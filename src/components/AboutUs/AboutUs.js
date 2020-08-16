import React from 'react';
import './AboutUs.css';
import image1 from '../../Image/adult-blur-blurred-background-687824.png';
import image2 from '../../Image/chef-cook-food-33614.png';
import image3 from '../../Image/architecture-building-city-2047397.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faBell, faTruck } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
    return (
        <div className="container">
            <div className="my-5">
                <h1 className="mb-3" style={{fontWeight:'400'}}>Whay you choose us</h1>
                <p>Barton waited twenty always repair in within we do. an delighted offending
                <br/> curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
            </div>
            <div className="card-group">
                <div className="card mr-3">
                    <img src={image1} className="card-img-top" alt="..."  />
                    <div className="card-body">
                    <h5 className="card-title"><FontAwesomeIcon className="bg-danger fontAws" icon={faBus}/> Fast Deliver</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card mr-3">
                    <img src={image2} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title"><FontAwesomeIcon className="bg-danger fontAws" icon={faBell}/> A Good Auto Responder</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src={image3} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title"><FontAwesomeIcon className="bg-danger fontAws" icon={faTruck}/> Home Delivery</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p className="card-text">See more</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;