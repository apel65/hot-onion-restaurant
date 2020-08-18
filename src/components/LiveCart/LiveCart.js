import React from 'react';
import './LiveCart.css';
import { removeFromDatabaseCart } from '../../utilities/databaseManager';

const LiveCart = (props) => {
    const {img, name, price, quantity, key} = props.food;

    const removeAddedFood = () => {
        removeFromDatabaseCart(key);
        window.location.reload();
    }

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
                            <span>{quantity}</span>
                            <button className="removeBtn" onClick={removeAddedFood}>remove</button> 
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default LiveCart;