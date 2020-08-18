import React from 'react';
import './BannerSection.css';

const BannerSection = () => {
    return (
        <div className="banner-section">
            <div className="banner-text">
                <h1>Best food waiting for your belly</h1>  
                <div className="input-group mb-5">
                <input type="text" className="form-control" placeholder="Search food items" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-danger" type="button" id="button-addon2">Search</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;