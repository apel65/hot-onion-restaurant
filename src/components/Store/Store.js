import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Lunch from '../Lunch/Lunch';
import Dinner from '../Dinner/Dinner';

const Store = () => {
    
    const [foods, setFoods] = useState(fakeData);
    // console.log(foods)

    const lunches = foods.filter(food => food.category === 'lunch');
    const dinners = foods.filter(food => food.category === 'Dinner');
    

    return (
        <div>
            <div className="lunch-section">
                {
                    lunches.map(lunch => <Lunch lunch={lunch}></Lunch>)
                }
            </div>
            
        </div>
    );
};

export default Store;