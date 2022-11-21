import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './sections/budget.js'
import Remaining from './sections/remaining.js'
import Expenses from './sections/expenses.js';
import TransactionList from './sections/transactionlist.js';

const App = () => {
    return (
        <div className = 'container'>
            <h1 className='mt-3'>Budget Tracker</h1>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <Budget />
                </div>
                <div className='col-sm'>
                    <Remaining />
                </div>
                <div className='col-sm'>
                    <Expenses />
                </div>
            </div>
            <h3 className='mt-3'>Transactions</h3>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <TransactionList />
                </div>
            </div>
        </div>
    );
};

export default App;




