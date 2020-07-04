import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Dinner from '../Dinner/Dinner';

const DinnerStore = () => {

    const [foods, setFoods] = useState(fakeData);

    const dinners = foods.filter(food => food.category === 'Dinner');
    
    return (
        <div>
            <div className="dinner-section">
                {
                    dinners.map(dinner => <Dinner dinner={dinner}></Dinner>)
                }
            </div>
        </div>
    );
};

export default DinnerStore;