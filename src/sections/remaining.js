import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext.js';
import { sendEmail } from '../components/Gmail.js';

const Remaining = () => {
    // need both expenses and budget for remaining, get from context
    const { expenses, budget } = useContext(AppContext);

    // use .reduce() to iterate thru, provide base case of 0
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);



    // conditional for color of money left
    const alertType = totalExpenses >= (budget - (budget * 0.10)) ? 'alert-warning' : 'alert-success';
    
    // conditional for email
    if (totalExpenses >= (budget - (budget * 0.10))) {
        sendEmail();
    }

    // return budget and total expenses via context, find difference
    return (
        <div className={`alert ${alertType}`}>
            <span>Money Left: ${budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;