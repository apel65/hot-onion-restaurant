import React, { useState, useEffect } from 'react';
import BreakFast from '../BreakFast/BreakFast';
import './BreakfastStore.css';
import CheckoutBtn from '../CheckoutBtn/CheckoutBtn';
import FullPageLoader from '../FullPageLoader/FullPageLoader';

const BreakfastStore = () => {
    const [foods, setFoods] = useState([]);
    
    useEffect(() => {
        fetch('https://blooming-meadow-56189.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => setFoods(data));
    }, [])

    const breakfast = foods.filter(food => food.category === 'breakfast');
    return (
        <div className="container">
            {foods.length > 0 ?
                breakfast.map(breakfast => <BreakFast key={breakfast.key} breakfast={breakfast}></BreakFast>) :
                <FullPageLoader></FullPageLoader>
            }
           <div className="text-center">
                <CheckoutBtn></CheckoutBtn>
           </div>
        </div>
    );
};

export default BreakfastStore;