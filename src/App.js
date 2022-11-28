import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './sections/budget.js'
import Remaining from './sections/remaining.js'
import Expenses from './sections/expenses.js';
import TransactionList from './sections/transactionlist.js';
import AddTransaction from './sections/addtransaction.js';
import { AppProvider } from './context/AppContext.js';

const App = () => {
    return (
        <AppProvider>
            <div className = 'container' 
                style={{
                    backgroundColor: 'grey',
                }}
                >
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
                <h3 className='mt-3'>Add Transaction</h3>
                <div className='mt-3'>
                    <div className='col-sm'>
                        <AddTransaction />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;




