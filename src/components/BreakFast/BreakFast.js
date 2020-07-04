import React from 'react';
import Container from 'react-bootstrap/Container';

const BreakFast = (props) => {
    const {name, price, img} = props.breakfast;

    return (
        <div className="lunches">
           <Container >
                <div className="item col-4">    
                    <img src={img} alt=""/>
                    <div className="detail">
                        <h6>{name}</h6>
                        <p>How we dream about our future</p>
                        <h4>${price}</h4>
                    </div>
               </div>
           </Container>
        </div>
    );
};

export default BreakFast;