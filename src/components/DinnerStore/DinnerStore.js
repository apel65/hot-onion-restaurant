import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Dinner from '../Dinner/Dinner';
import CheckoutBtn from '../CheckoutBtn/CheckoutBtn';

const DinnerStore = () => {
    const [foods, setFoods] = useState(fakeData)
    const dinner = foods.filter(food => food.category === 'Dinner');
    return (
        <div>
             <div>
                {
                    dinner.map(dinner => <Dinner key={dinner.key} dinner={dinner}></Dinner>)
                }
                <div className="text-center">
                    <CheckoutBtn></CheckoutBtn>
                </div>
            </div>
        </div>
    );
};

export default DinnerStore;