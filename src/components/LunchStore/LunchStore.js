import React, { useState } from 'react';
import Lunch from '../Lunch/Lunch';
import CheckoutBtn from '../CheckoutBtn/CheckoutBtn';
import { useEffect } from 'react';

const LunchStore = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4200/foods')
        .then(res => res.json())
        .then(data => setFoods(data));
    }, [])

    const lunch = foods.filter(food => food.category === 'lunch');
    return (
        <div className="container">
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