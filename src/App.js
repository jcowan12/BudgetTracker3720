import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './sections/budget.js'
import Remaining from './sections/remaining.js'
import Expenses from './sections/expenses.js';
import TransactionList from './sections/transactionlist.js';
import AddTransaction from './sections/addtransaction.js';
import { AppProvider } from './context/AppContext.js';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton.js';
import Profile from './components/Profile.js';

const App = () => {
    return (
        <AppProvider>
            <div className = 'container'>
                <h1 className='mt-3'>Budget Tracker</h1>
                <h4 className='mt-3'>Login to receive emails when you have 10% of your budget remaining!</h4>
                <div className='h2'></div>
                <div className='mt-3'>
                    <div className='col-sm'>
                        <Profile />
                        <LoginButton />
                        <LogoutButton />
                    </div>
                </div>
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
                <h3 className='mt-3'>Add Transaction</h3>
                <div className='mt-3'>
                    <div className='col-sm'>
                        <AddTransaction />
                    </div>
                </div>
                <h3 className='mt-3'>Transactions</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <TransactionList />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;




