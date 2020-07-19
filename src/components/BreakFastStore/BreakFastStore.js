import React, { useState } from 'react';
import fakeData from '../../fakeData';
import BreakFast from '../BreakFast/BreakFast';
import './BreakfastStore.css';
import CheckoutBtn from '../CheckoutBtn/CheckoutBtn';

const BreakfastStore = () => {
    const [foods, setFoods] = useState(fakeData)
    const breakfast = foods.filter(food => food.category === 'breakfast');
    return (
        <div className="container">
            {
                breakfast.map(breakfast => <BreakFast key={breakfast.key} breakfast={breakfast}></BreakFast>)
            }
           <div className="text-center">
                <CheckoutBtn></CheckoutBtn>
           </div>
        </div>
    );
};

export default BreakfastStore;