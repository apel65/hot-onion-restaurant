import React from 'react';
import './Header.css';
import logo from '../../Image/logo2.png';
import banner from '../../Image/bannerbackground.png';
import './Header.css';

const Header = () => {
    return (
        <div>
           
           <div className="header1">
                <nav>
                    <a href="/" className="logo"><img src={logo} alt=""/></a>
                </nav>
           </div>

            <div className="banner">
               
            </div>

           <div className="header2">
                <nav>
                    <a href="/breakfast">Breakfast</a>
                    <a href="/lunch" className="active">Lunch</a>
                    <a href="/dinner">Dinner</a>
                </nav>
           </div>
                
        </div>
    );
};

export default Header;