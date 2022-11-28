import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Expenses = () => {
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item)=> {
        return (total = total + item.cost);
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Total Expenses: ${totalExpenses}</span>
        </div>
    );
};

export default Expenses;