import React from 'react';
import Transaction from './transaction.js';

const TransactionList = () => {
    const expenses = [
        { id: 123, name: 'Shopping', cost: 50 },
        { id: 123, name: 'Shopping', cost: 50 },
        { id: 123, name: 'Shopping', cost: 50 },
        { id: 123, name: 'Shopping', cost: 50 },
        { id: 123, name: 'Shopping', cost: 150 }
    ]

    return (
        <ul className ='list-group'>
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