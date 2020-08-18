import React from 'react';
import './AboutUs.css';
import image1 from '../../Image/adult-blur-blurred-background-687824.png';
import image2 from '../../Image/chef-cook-food-33614.png';
import image3 from '../../Image/architecture-building-city-2047397.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faBell, faTruck, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {

    const showMore = () => {
        return `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, atque nihil? Facilis, voluptates dolore mollitia odio cupiditate nobis officia, cumque earum facere quia molestiae omnis ab accusantium neque, aspernatur dicta!`;
    }
    
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
                    <button className="seeBtn">See more <FontAwesomeIcon className="arrowIcon" icon={faArrowRight} /></button>
                    </div>
                </div>
                <div className="card mr-3">
                    <img src={image2} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title"><FontAwesomeIcon className="bg-danger fontAws" icon={faBell}/> A Good Auto Responder</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <button className="seeBtn">See more <FontAwesomeIcon className="arrowIcon" icon={faArrowRight} /></button>
                    </div>
                </div>
                <div className="card">
                    <img src={image3} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title"><FontAwesomeIcon className="bg-danger fontAws" icon={faTruck}/> Home Delivery</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button onClick={console.log(showMore())} className="seeBtn">See more <FontAwesomeIcon className="arrowIcon" icon={faArrowRight} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;