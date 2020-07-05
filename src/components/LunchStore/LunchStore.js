import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Lunch from '../Lunch/Lunch';

const LunchStore = () => {
    
    const [foods, setFoods] = useState(fakeData);
    const lunches = foods.filter(food => food.category === 'lunch');

    return (
        <div>
            <div className="lunch-section">
                {
                    lunches.map(lunch => <Lunch key={lunch.key} lunch={lunch}></Lunch>)
                }
            </div>
        </div>
    );
};

export default LunchStore;