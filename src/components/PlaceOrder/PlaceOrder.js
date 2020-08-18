import React from 'react';
import './PlaceOrder.css';
import map from '../../Image/map.jpg';
import ride from '../../Image/ride.png';
import helmet from '../../Image/helmet.png';

const PlaceOrder = () => {
    return (
        <div className="container margin-top">
            <div className="row">
                <div className="col-md-6">
                    <img src={map} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-6">
                    <div className="right-section">
                        <div className="rider">
                            <img src={ride} alt="" className="img-fluid w-25"/>
                        </div>
                        <div className="wrapper-location">
                            <div className="location1">
                                <p>Your Location</p>
                                <p>107 Rd no 8</p>
                            </div>
                            <div className="location2">
                                <p>Shop Address</p>
                                <p>Gulshan Plaza Restaura GPR</p>
                            </div>
                        </div>
                        <div className="ml-3 py-2 time">
                                <h3>9:30 AM</h3>
                                <p>Estimated Delivery Time</p>
                            </div>
                        <div className="helmet d-flex">
                            <img src={helmet} alt="" className="img-fluid w-25"/>
                            <div className="ml-3">
                                <h6>Mahmud</h6>
                                <p>Your raider</p>
                            </div>
                        </div>
                        <button className="btn btn-danger my-3 contact-btn">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;