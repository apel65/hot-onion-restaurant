import React, { useState } from 'react';
import fakeData from '../../fakeData';
import BreakFast from '../BreakFast/BreakFast';

const BreakFastStore = () => {
    const [foods, setFoods] = useState(fakeData);
    
    const breakFastes = foods.filter(food => food.category === 'breakfast');
    
    return (
        <div>
            <div className="dinner-section">
                {
                    breakFastes.map(breakfast => <BreakFast breakfast={breakfast}></BreakFast>)
                }
            </div>
        </div>
    );
};

export default BreakFastStore;