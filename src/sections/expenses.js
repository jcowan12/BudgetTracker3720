import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Expenses = () => {
    // use context of expenses array (transactions)
    const { expenses } = useContext(AppContext);

    // .reduce() iterates thru array, totaling all transactions
    const totalExpenses = expenses.reduce((total, item)=> {
        return (total = total + item.cost);
    }, 0);

    // main return, produces expenses header
    return (
        <div className='alert alert-primary'>
            <span>Total Expenses: ${totalExpenses}</span>
        </div>
    );
};


export default Expenses;