import React, { useState } from 'react';
import Dinner from '../Dinner/Dinner';
import CheckoutBtn from '../CheckoutBtn/CheckoutBtn';
import { useEffect } from 'react';

const DinnerStore = () => {
    
    const [foods, setFoods] = useState([]);
    
    useEffect(() => {
        fetch('https://blooming-meadow-56189.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])

    const dinner = foods.filter(food => food.category === 'Dinner');
    return (
        <div>
             <div className="container">
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