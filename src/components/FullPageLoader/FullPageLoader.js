import React from 'react';
import './FullPageLoader.css';
import loaderImg from '../../Image/loader.gif';

const FullPageLoader = () => {
    return (
        <div className="loader-container">
            <div className="loader text-center">
                <img src={loaderImg} alt="" className="img-fluid w-25"/>
            </div>
        </div>
    );
};

export default FullPageLoader;