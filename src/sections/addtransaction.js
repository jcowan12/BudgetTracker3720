import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext.js';
import { v4 as uuidv4 } from 'uuid';
import { sendEmail } from '../components/Gmail.js';
import { useAuth0 } from '@auth0/auth0-react';


const AddTransaction = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item)=> {
        return (total = total + item.cost);
    }, 0);

    // create variables for name and cost, setting to blank
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const {isAuthenticated} = useAuth0();

    // submission of add transaction button
    const onSubmit = (event) => {
        event.preventDefault();

        // array containing id, name, cost
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        // conditional to send warning email when logged in and when threshold is passed
        if((totalExpenses < budget*0.9) &&  (totalExpenses + expense.cost) >= budget*0.9){
            if (isAuthenticated) {
                sendEmail();
            } 
            else {
                console.log("No user signed in.")
            }
        }
        
        // essentially sends the information we gathered to the context
        dispatch({
            type: 'ADD_TRANS',
            payload: expense,
        })
    };

    // contains formatting for name and cost fields, as well as submit button
    return (
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <label for='name'>Name</label>
                    <input  
                        required='required' 
                        type='text' 
                        className='form-control'
                        id='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        >
                    </input>
                </div>
                <div className='col-sm'>
                    <label for='cost'>Cost</label>
                    <input 
                        required='required' 
                        type='text' 
                        className='form-control'
                        id='cost'
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                        >
                    </input>
                </div>
                <div className='h2'></div>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-dark'>
                    Add
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddTransaction;