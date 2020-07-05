import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const BreakFast = (props) => {
    const {name, price, img, key} = props.breakfast;

    return (
        <div className="lunches">
           <Container >
                <div className="item col-4">    
                    <img src={img} alt=""/>
                    <div className="detail">
                        <h6><Link to={"/breakfastes/"+key}>{name}</Link></h6>
                        <p>How we dream about our future</p>
                        <h4>${price}</h4>
                    </div>
               </div>
           </Container>
        </div>
    );
};

export default BreakFast;