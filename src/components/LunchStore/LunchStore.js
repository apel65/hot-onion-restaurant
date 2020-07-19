import React, { useState } from 'react';
import Lunch from '../Lunch/Lunch';
import fakeData from '../../fakeData';
import CheckoutBtn from '../CheckoutBtn/CheckoutBtn';

const LunchStore = () => {
    const [foods, setFoods] = useState(fakeData)
    const lunch = foods.filter(food => food.category === 'lunch');
    return (
        <div>
            {
                lunch.map(lunch => <Lunch key={lunch.key} lunch={lunch}></Lunch>)
            }
            <div className="text-center">
                <CheckoutBtn></CheckoutBtn>
            </div>
        </div> 
    );
};

export default LunchStore;