import React from 'react';
import './LiveCart.css';


const LiveCart = (props) => {
    const {img, name, price, quantity} = props.food;

    const foodName = name.split(' ');
    const shortName = (`${foodName[0]} ${foodName[1]}`);

    return (
        <div className="table-wrapper">
            <table>
                <tbody>
                    <tr className="text-justify">
                        <td><img className="cart-img" src={img} alt=""/></td>
                        <td>{shortName}<br/><h5 className="text-danger">${price}</h5></td>
                        <td>
                            <button>+</button><br/>
                            <span>{quantity}</span><br/>
                            <button >-</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default LiveCart;