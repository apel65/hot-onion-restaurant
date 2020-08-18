import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './FoodDetail.css';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import FullPageLoader from '../FullPageLoader/FullPageLoader';


const FoodDetail = () => {
    const { foodKey } = useParams();
    const [food, setFood] = useState(null);

    useEffect(() => {
        fetch('https://blooming-meadow-56189.herokuapp.com/food/'+ foodKey)
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

        //Show food Added message
        const showMessage = document.getElementById('showMessage');
            showMessage.style.display = 'block';
        setTimeout(() => {
            showMessage.style.display = 'none';
        }, 4000)
        //Page loaded After show food added message for update cart number
        setTimeout(() => {
            window.location.reload();
        }, 5000)
    }

    return (
        <div className="container my-5">
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
                    <p id="showMessage" className="text-danger mt-3 ml-5" style={{display:'none'}}>Food added successfully</p>
                </div>
                <div className="col-md-6">
                    {food ?
                        <img className="img-fluid w-100%" src={img} alt=""/> :
                        <FullPageLoader></FullPageLoader>
                    }
                </div>
           </div>
        </div>
    );
};

export default FoodDetail;