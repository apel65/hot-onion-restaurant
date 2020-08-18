import React, { useState } from 'react';
import Lunch from '../Lunch/Lunch';
import CheckoutBtn from '../CheckoutBtn/CheckoutBtn';
import { useEffect } from 'react';
import FullPageLoader from '../FullPageLoader/FullPageLoader';

const LunchStore = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('https://blooming-meadow-56189.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => setFoods(data));
    }, [])

    const lunch = foods.filter(food => food.category === 'lunch');
    return (
        <div className="container">
        { foods.length > 0 ? 
            lunch.map(lunch => <Lunch key={lunch.key} lunch={lunch}></Lunch>) :
            <FullPageLoader></FullPageLoader>
        }
            <div className="text-center">
                <CheckoutBtn></CheckoutBtn>
            </div>
        </div> 
    );
};

export default LunchStore;