import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';


const Transaction = (props) => {
    // action is involved, so need dispatch
    const { dispatch } = useContext(AppContext);

    // provide definition of deleting a transaction
    const handleDeleteTransaction = () => {
        dispatch({
            type: 'DELETE_TRANS',
            payload: props.id,
        });
    };

    // connects delete icon w the action of deleting a transaction
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span className='badge bg-success mr-3'>${props.cost}</span>
                <TiDelete size='1.5em' onClick={handleDeleteTransaction}></TiDelete>
            </div>
        </li>
    );
};

export default Transaction;