import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext.js';

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);


    // conditional for color of money left
    const alertType = totalExpenses >= (budget - (budget * 0.10)) ? 'alert-warning' : 'alert-success';
    
    return (
        <div className={`alert ${alertType}`}>
            <span>Money Left: ${budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;