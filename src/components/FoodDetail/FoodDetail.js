import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './FoodDetail.css';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';


const FoodDetail = () => {
    const { foodKey } = useParams();
    const [food, setFood] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4200/food/'+ foodKey)
        .then(res => res.json())
        .then(data => setFood(data))
    }, [foodKey])

    if(food){
        var {img, category, price} = food;
    }

    const [count, setCount] = useState(1);
    const handleAddFood = (product) => {
        let quantity = product.quantity = count;
        addToDatabaseCart(product.key, quantity)
        window.location.reload();
    }

    return (
        <div className="container">
           <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h1>Light {category}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi hic explicabo laborum asperiores quos consequuntur voluptatibus esse quam, natus consequatur eum qui vero inventore. Dolore error consectetur ad ex?</p>
                    
                    <div className="d-flex">
                        <div>
                            <h2>${price}</h2>
                        </div>
                        <div className="food-quantity">
                            <button onClick={() => setCount(Math.max(count - 1,1))}>-</button>
                            <span>{count}</span>
                            <button onClick={() => setCount(count + 1)}>+</button>
                        </div>
                    </div>
                    <br/>
                    { food &&
                        <button onClick={() => handleAddFood(food)} className="main-btn btn-danger">
                        <FontAwesomeIcon className="icon" icon={faCartPlus}/>
                        Add
                        </button>
                    }
                </div>
                <div className="col-md-6">
                    <img className="img-fluid w-100%" src={img} alt=""/>
                </div>
           </div>
        </div>
    );
};

export default FoodDetail;