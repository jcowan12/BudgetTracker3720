import React, { useContext } from 'react';
import Transaction from './transaction.js';
import { AppContext } from '../context/AppContext.js';

const TransactionList = () => {
    // provides expenses array from context
    const { expenses } = useContext(AppContext);

    // returns formatted list
    return (
        <ul className='list-group'>
            {expenses.map((expense)=>(
                <Transaction
                    id={expense.id} 
                    name={expense.name} 
                    cost={expense.cost} />
            ))}
        </ul>
    );
};

export default TransactionList;