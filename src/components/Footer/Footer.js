import React from 'react';
import './Footer.css';
import logo from '../../Image/logo.png'

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid w-25" src={logo} alt=""/>

                </div>
                <div className="col-md-3">
                    <ul className="footer-list-item">
                        <li><a href="/">About Online food</a></li>
                        <li><a href="/">Read our Blog</a></li>
                        <li><a href="/">Sign up to deliver</a></li>
                        <li><a href="/">Add your resturant</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="footer-list-item">
                            <li><a href="/">Get help</a></li>
                            <li><a href="/">Read FAQs</a></li>
                            <li><a href="/">View all cities</a></li>
                            <li><a href="/">Resturants near me</a></li>
                    </ul>
                </div>
            </div>
            <div className="row margin-top">
                    <div className="col-md-6">
                        <p className="text-secondary"><small>Copyright &copy; 2020 online food</small></p>
                    </div>
                    <div className="col-md-2"><a href="/">Privacy Policy</a></div>
                    <div className="col-md-2"><a href="/">Terms Use</a></div>
                    <div className="col-md-2"><a href="/">Pricing</a></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;